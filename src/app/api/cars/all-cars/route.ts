// import { Car } from "@/interfaces/car.interface";
import prisma from "@/lib/prisma";
// import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {
   try {
      const cars = await prisma.car.findMany();
      return NextResponse.json(cars, { status: 200 });
   } catch (error) {
      console.error("Error fetching cars:", error);
      return NextResponse.json(
         { error: "Failed to fetch cars" },
         { status: 500 }
      );
   }
}
