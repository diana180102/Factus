import Aside from "../Aside";

export default function DashboardLayaout({children}:Readonly<{children:React.ReactNode}>) {
   return (
   <div className="flex flex-row w-full min-w-[600px] min-h-screen">
      <Aside></Aside>
      <div className=" flex flex-col items-center p-4  w-full bg-gray-600">

      {children}
      </div>
   </div>)
}