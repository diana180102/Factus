import axios, { AxiosError } from "axios";

export async function getMeasure() {
  try {
    const res = await axios.get("/api/measure");
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("Error getting measure:", (error as AxiosError).response?.data || (error as AxiosError).message);
    } else {
      console.log("Unexpected error");
    }
  }
}