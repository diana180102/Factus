
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

// import { getToken } from "next-auth/jwt";

export async function middleware(request:NextRequest){

    
    const session = await auth(); 
    

    
    

    if(!session?.accessToken){
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next();
}

export const config ={
    matcher: ['/protected/:path*']
}