import { Bill, FormDataType } from "@/types/invoice";
import axios, { AxiosError } from "axios";
import { getSession } from "next-auth/react";



const endpoint = `https://api-sandbox.factus.com.co/v1/bills/validate`;

export async  function createInvoiceService (data:FormDataType){

    try {

      const session = await getSession();
   
      const res = await axios.post(endpoint, data, {
            headers:{
                Authorization: `Bearer ${session?.accessToken}`
            },
            
      });

      return res.data as { data: { bill: Bill } };
    
   } catch (error) {
      if (error instanceof AxiosError){
         console.log("Error creating invoice:", (error as AxiosError).response?.data || (error as AxiosError).error.message);
      }else{
         console.log("Unexpected error");
      }
   }


}