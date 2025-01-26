import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request:NextRequest){

    //get TOKEN
    const session = await getToken({req: request, secret:process.env.NEXTAUTH_SECRET})

    if(!session){
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next();
}

export const config ={
    matcher: ['/protected/:path*']
}