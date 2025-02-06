import axios, { AxiosError } from "axios";

export async function getOrganization() {
    try {
        const res = await axios.get('/api/organization/');
        return res.data;
    } catch (error) {
       if (error instanceof AxiosError) {
             console.log("Error get organization:", (error as AxiosError).response?.data || (error as AxiosError).message);
           } else {
             console.log("Unexpected error");
           }
         }
    
}