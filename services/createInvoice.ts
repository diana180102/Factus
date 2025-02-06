import { FormDataType } from "@/types/invoice";
import axios, { AxiosError } from "axios";
import { getSession } from "next-auth/react";



const endpoint = `https://api-sandbox.factus.com.co/v1/bills/validate`;

export async  function createInvoice (data:FormDataType){

    try {

      const session = await getSession();
   
      const res = await axios.post(endpoint, data, {
            headers:{
                Authorization: `Bearer ${session?.accessToken}`
            },
            
      });

      return res.data;
    
   } catch (error) {
      if (error instanceof AxiosError){
         console.log("Error get invoice type:", (error as AxiosError).response?.data || (error as AxiosError).error.message);
      }else{
         console.log("Unexpected error");
      }
   }


}