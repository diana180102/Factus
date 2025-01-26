/* eslint-disable @typescript-eslint/no-unused-vars */
import { Session } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

import type { AxiosError } from 'axios';
import qs from "qs";
import type { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, _req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email y contraseña son requeridos");
        }

        try {
          const response = await axios.post(
            "https://api-sandbox.factus.com.co/oauth/token",
            qs.stringify({
              grant_type: "password",
              client_id: process.env.CLIENT_ID,
              client_secret: process.env.CLIENT_SECRET,
              username: credentials.email,
              password: credentials.password,
            }),
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          const { access_token, refresh_token } = response.data as {
            access_token: string;
            refresh_token: string;
          };

          if (access_token && refresh_token) {
            return {
              id: credentials?.email,
              name: credentials?.email,
              email: credentials?.email,
              accessToken: access_token,
              refreshToken: refresh_token,
            };
          }

          return null;
        } catch (error) {
          if (error instanceof AxiosError) {
            console.error(
              "Error al autenticar: ",
              (error as AxiosError).response?.data || (error as AxiosError).message
            );
          } else {
            console.error("Error inesperado: ", error);
          }
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account }: { token: JWT; account?: User }) {
      if (account) {
        token.accessToken = account.accessToken;
        token.refreshToken = account.refreshToken;
        
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/dashboard",
  },
};

export async function auth() {
  return await getServerSession(authOptions);
}


interface User {
  accessToken: string;
  refreshToken: string;
}
