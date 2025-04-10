// app/api/cars/new/route.ts
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
interface NewCarData {
   model: string;
   brand: string;
   year: number;
   price: number;
}

export const newCarAction = async (
   model: string,
   brand: string,
   year: number,
   price: number
): Promise<NewCarData> => {
   const newCar = await prisma.car.create({
      data: {
         model,
         brand,
         year,
         price,
      },
   });

   return newCar;
};

export async function POST(req: Request) {
   try {
      const token = req.headers
         .get("cookie")
         ?.split("; ")
         .find((cookie) => cookie.startsWith("token="))
         ?.split("=")[1];

      if (!token) {
         return NextResponse.json(
            { error: "Token not found" },
            { status: 401 }
         );
      }
      // Here you can verify the token if needed
      // For example, you can decode it and check its validity
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET!);
      if (!decodedToken) {
         return NextResponse.json({ error: "Invalid token" }, { status: 401 });
      }
     
      const { model, brand, year, price } = await req.json();
      // console.log(typeof model, typeof brand, typeof year, typeof price);
      const newCar = await newCarAction(model, brand, year, price);
      return NextResponse.json(newCar, { status: 201 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error: "Error adding car" }, { status: 500 });
   }
}
