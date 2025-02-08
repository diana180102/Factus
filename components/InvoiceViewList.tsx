
import { poppins } from "@/ui/font";
import InvoiceList from "./InvoiceList";

export function InvoiceViewList() {
  return (
    <div className="mt-16 p-4">
      <h2 className={`${poppins.className} mb-8 text-2xl font-bold `} > Lista de Facturas</h2>
      <InvoiceList></InvoiceList>
    </div>
  );
}