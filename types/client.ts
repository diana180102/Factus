import { Bill } from "./invoice";

export type Client = {
    email:string;
    names:string;
    identification:string;
    number:string;
}

export type InvoiceResponse = {
    data:Client[] | Bill[] ;
} 