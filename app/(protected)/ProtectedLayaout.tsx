import { auth } from "@/auth";
import { ReactNode } from "react";

export default async function ProtectedLayaout({children}:{children:ReactNode}) {
    
    const session = await auth();

    if(!session){
        return <div>Acceso no autorizado</div>
    }

    return (
        <>{children}</>
    )
}