import { InvoiceViewList } from "@/components/InvoiceViewList";
import DashboardLayaout from "@/components/layaout/DashboardLayaout";

export default function InvoiceView (){
     return (
        <DashboardLayaout>
            <InvoiceViewList></InvoiceViewList>
        </DashboardLayaout>
     )
}