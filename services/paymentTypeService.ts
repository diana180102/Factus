import axios, { AxiosError } from "axios";

export async function getPaymentType() {
    try {
        const res = await axios.get(`/api/paymentType`);

        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log("Error getting payment type:", (error as AxiosError).error.response?.data || (error as AxiosError).error.message);
        } else {
            console.log("Unexpected error");
        }
    }


}