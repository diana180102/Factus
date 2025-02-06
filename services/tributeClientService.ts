import axios,{ AxiosError } from "axios";

export async function getTributeClient(){
    try {
     const res = await axios.get(`/api/tributeClient`);

     return res.data;
        
    } catch (error) {
        if(error instanceof AxiosError){
             console.log("Error getting tribute Client:", (error as AxiosError).error.response?.data || (error as AxiosError).error.message);
        }else{
            console.log("Unexpected error");
        }
    }
}