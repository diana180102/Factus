import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const data = await prisma.retencion.findMany();
        
        return NextResponse.json({
            status:200,
            data,
        });
    } catch (error) {
        if (error instanceof Error){
            return NextResponse.json({
                status:500,
                messsage: error
            });
        }
    }
}