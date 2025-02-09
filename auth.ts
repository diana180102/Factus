/* eslint-disable @typescript-eslint/no-unused-vars */
import { Session } from "next-auth";
import type { NextAuthOptions, User } from "next-auth";
import { getServerSession } from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";
import axios, { AxiosError } from 'axios';
import qs from "qs";
import type { JWT } from "next-auth/jwt";
import { refreshAccessToken } from "./services/refreshTokenService";




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
          
          const {access_token, refresh_token, expires_in} = response.data as {access_token: string, refresh_token:string, expires_in:number};

          if(access_token){
            return {
              id: credentials.email, 
              access_token,
              refresh_token, 
              expires_in: Date.now() + expires_in * 1000 ,
              email:credentials.email
            } as CustomUser;
          }
            return null;
        } catch (error) {
          if (error instanceof axios.AxiosError) {
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
        
        console.log(user)
         token.accessToken = users.access_token;
         token.refreshToken = users.refresh_token;
         token.accessTokenExpires = users.expires_in;
         
      }

       

        if (typeof token.accessTokenExpires === 'number' && Date.now() > token.accessTokenExpires ) {
          console.log("El token ha caducado, renovando...");
          token = await refreshAccessToken(token);
          
        }
      

      
      return token ;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.expires = token.accessTokenExpires as string;
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
  refresh_token:string;
  expires_in:number;
  email: string;
}
