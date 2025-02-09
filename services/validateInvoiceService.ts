import axios, { AxiosError } from "axios";
import { getSession } from "next-auth/react";



const endpoint = `https://api-sandbox.factus.com.co/v1/bills/send`;

export async  function validateInvoiceService (number:string){

    try {

      const session = await getSession();
   
      const res = await axios.post(`${endpoint}/${number}`);

      return res.data;
    
   } catch (error) {
      if (error instanceof AxiosError){
         console.log("Error validating invoice:", (error as AxiosError).response?.data || (error as AxiosError).error.message);
      }else{
         console.log("Unexpected error");
      }
   }


}