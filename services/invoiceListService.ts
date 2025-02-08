

import axios, { AxiosError } from "axios";
import { getSession } from "next-auth/react";

const endpoint = `https://api-sandbox.factus.com.co/v1/bills`

export async function getInvoices(identification= '', name= '', invoiceNumber= '') {
    


    try {
        const session = await getSession();
        

        const res = await axios.get(`${endpoint}`, {
            headers:{
                Authorization: `Bearer ${session?.accessToken}`
            },
            params:{
                'filter[identification]': identification,
                'filter[names]': name,
                'filter[number]': invoiceNumber,
                'filter[prefix]':  '',
                'filter[reference_code]':'',
                'filter[status]':''
            }
        });

        return res.data;
    } catch (error) {
         if (error instanceof AxiosError){
                 console.log("Error geitting invoices:", (error as AxiosError).response?.data || (error as AxiosError).error.message);
              }else{
                 console.log("Unexpected error");
              }
           }
    }

