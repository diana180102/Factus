import axios, { AxiosError } from "axios";

export async function getMethodPayment() {
    try {
        const res = await axios.get(`/api/methodPayment`);

        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log("Error getting method payment:", (error as AxiosError).error.response?.data || (error as AxiosError).error.message);
        } else {
            console.log("Unexpected error");
        }
    }


}