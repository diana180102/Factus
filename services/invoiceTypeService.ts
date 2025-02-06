import axios, { AxiosError } from "axios";

export async function getInvoiceType() {
  try {
    const res = await axios.get("/api/invoiceType");
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("Error get invoice type:", (error as AxiosError).response?.data || (error as AxiosError).message);
    } else {
      console.log("Unexpected error");
    }
  }
}
