/* eslint-disable @typescript-eslint/no-unused-vars */
import { Session } from "next-auth";
import type { NextAuthOptions, User } from "next-auth";
import { getServerSession } from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

import type { AxiosError } from 'axios';
import qs from "qs";
import type { JWT } from "next-auth/jwt";
import { setCookie, destroyCookie } from 'nookies';


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email y contraseña son requeridos");
        }


        try {
           
          const response = await axios.post(
            "https://api-sandbox.factus.com.co/oauth/token",
            qs.stringify({
              grant_type: "password",
              client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
              client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
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

          // console.log(response.data)
          // console.log(credentials)

          const { access_token, refresh_token, expires_in } = response.data as {
            access_token: string;
            refresh_token: string;
            expires_in: number;
          };

          if(access_token){
            //Almacena el token en una cookie
            setCookie(null, 'accessToken', access_token, {
              maxAge: expires_in,
              path: '/'
            });

            setCookie(null, 'refreshToken', refresh_token, {
              maxAge: expires_in, 
              path: '/',
            });

            return {
              id: credentials.email, 
              access_token, 
              refresh_token, 
              email:credentials.email
            } as CustomUser;
         }

          // console.log(access_token)

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



  callbacks: {
    async jwt({ token, account, user }){
       const users = user as unknown as CustomUser;

      if (user) {
        // console.log("account", account)
        console.log(user)
         token.accessToken = users.access_token;
        token.refreshToken = users.refresh_token;
        
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      // console.log("token", token)
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



interface CustomUser extends User {
  access_token: string;
  refresh_token: string;
  email: string;
}
