import axios, { AxiosError } from "axios";
import { getSession } from "next-auth/react";

const endpoint = `https://api-sandbox.factus.com.co/v1/bills/show`;
export async function getInvoice(number: string) {
  

  
  try {

    const session = await getSession();
    
    const res = await axios.get(`${endpoint}/${number}`, {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(
        "Error geitting invoice:",
        (error as AxiosError).response?.data ||
          (error as AxiosError).error.message
      );
    } else {
      console.log("Unexpected error");
    }
  }
}
