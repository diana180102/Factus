import axios,{ AxiosError } from "axios";

export async function getTributeProduct(){
    try {
     const res = await axios.get(`/api/tributeProduct`);

     return res.data;
        
    } catch (error) {
        if(error instanceof AxiosError){
             console.log("Error getting tribute Product:", (error as AxiosError).error.response?.data || (error as AxiosError).error.message);
        }else{
            console.log("Unexpected error");
        }
    }
}