import axios, { AxiosError } from "axios";
import { getSession } from "next-auth/react";

const endpoint = "https://api-sandbox.factus.com.co/v1/municipalities?name=";

export async function getMunicipios() {
    try {
        const session = await getSession(); 

       
        
        const res = await axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${session?.accessToken}`,
            },
        });

        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log("Error get invoice type:", (error as AxiosError).error.response?.data || (error as AxiosError).error.message);
        } else {
            console.log("Unexpected error");
        }
    }
}
