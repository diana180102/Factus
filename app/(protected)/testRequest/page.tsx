"use client"

import { useEffect } from "react";
import axios from "axios";
import qs from "qs";

const TestRequestPage = () => {
  useEffect(() => {
    async function testRequest() {
      console.log("Iniciando solicitud de prueba");

      try {
        const response = await axios.post(
          "https://api-sandbox.factus.com.co/oauth/token",
          qs.stringify({
            grant_type: "password",
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            username: "sandbox@factus.com.co",
            password: "sandbox2024%",
          }),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        console.log("Respuesta de la API:", response.data);
      } catch (error) {
        console.error("Error en la solicitud de prueba:", error);
      }
    }

    testRequest();
  }, []);

  return <div>Revisa la consola del navegador para ver los resultados.</div>;
};

export default TestRequestPage;
