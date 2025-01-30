import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

export async function middleware(request:NextRequest){

    const accessToken = request.cookies.get('accessToken');

    
    

    if(!accessToken){
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next();
}

export const config ={
    matcher: ['/protected/:path*']
}