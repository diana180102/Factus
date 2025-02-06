import axios, { AxiosError } from "axios";

export async function getStandard() {
    try {
        const res = await axios.get(`/api/standard`);

        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.log("Error getting standard:", (error as AxiosError).error.response?.data || (error as AxiosError).error.message);
        } else {
            console.log("Unexpected error");
        }
    }


}