import { auth } from "@/auth";
import Aside from "../Aside";
import { redirect } from "next/navigation";

export default async function DashboardLayaout({children}:Readonly<{children:React.ReactNode}>) {
  const session =  await auth();
  
   if(!session?.accessToken){
      redirect("/")
   }


 return (
    <>
     {
      session?.accessToken && 
         <div className="flex flex-row w-full min-w-[600px] min-h-screen">
         <Aside></Aside>
         <div className=" flex flex-col items-center p-4  w-full ">
         
         {children}
         </div>
      </div>
     }
    </>
   )
}