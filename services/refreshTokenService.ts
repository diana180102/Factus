import axios, { AxiosError } from "axios";
import { JWT } from "next-auth/jwt";
import qs from "qs";


export async function refreshAccessToken(token:JWT) {
  try {
    const response = await axios.post(
      "https://api-sandbox.factus.com.co/oauth/token",
      qs.stringify({
        grant_type: "refresh_token",
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        refresh_token: "def50200325e90a72ad378d704c108cefa75c5c4a513ca6992fdce87",
      }),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, refresh_token } = response.data as { access_token: string; refresh_token: string };
    

     
       return {
         ...token,
         accessToken: access_token,
         refreshToken: refresh_token ?? token.refreshToken,
         accessTokenExpires: Date.now() + 3600 * 1000,
       };
     
     
   
    
    
  } catch (error) {

    if (!token || !token.refreshToken) {
      console.error(
        "No hay refresh token disponible. Usuario no ha iniciado sesión.", (error as AxiosError).response?.data || (error as AxiosError).message);
      
      return {
        ...token,
        error: "NoRefreshTokenAvailable",
      };
    }

    
  }
}