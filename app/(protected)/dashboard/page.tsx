
import InvoiceForm from "@/components/InvoiceForm";
import DashboardLayaout from "@/components/layaout/DashboardLayaout";

export default async function Dashboard() {
  return (
    <div className="">
      <DashboardLayaout>
        <InvoiceForm></InvoiceForm>
      </DashboardLayaout>
    </div>
  );
}