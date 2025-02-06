import axios, { AxiosError } from "axios";

export async function getIdentityDocument() {
  try {
    const res = await axios.get("/api/identityDocument");
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {  
      console.log("Error get identity document:", (error as AxiosError).response?.data || (error as AxiosError).message);
    } else {
      console.log("Unexpected error");
    }
  }
}
