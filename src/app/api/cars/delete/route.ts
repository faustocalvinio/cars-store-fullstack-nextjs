import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";
export async function DELETE(req: Request) {

    // const { id } = await req.json();

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
         
            const { id } = await req.json();
            console.log(id);
            const deletedCar = await prisma.car.delete({
                where: { id: id },
            });
            console.log(deletedCar);
            return NextResponse.json(deletedCar, { status: 200 });
}