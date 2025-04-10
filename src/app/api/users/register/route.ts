import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

async function createNewUser({
   name,
   email,
   password,
}: {
   name: string;
   email: string;
   password: string;
}) {
   try {
      const newUser = await prisma.user.create({
         data: {
            name,
            email,
            password,
         },
      });
      return newUser;
   } catch (error) {
      console.error("Error creating new user:", error);
      throw new Error("Failed to create new user");
   }
}

export async function POST(req: Request) {
   try {
      const { name, email, password } = await req.json();
      if (!name || !email || !password) {
         return NextResponse.json(
            { error: "All fields are required" },
            { status: 400 }
         );
      }
      console.log(prisma);
      // Check if the user already exists
      const existingUser = await prisma.user.findUnique({
         where: { email },
      });
      if (existingUser) {
         return NextResponse.json(
            { error: "User already exists" },
            { status: 409 }
         );
      }
      const token = jwt.sign(
         { email },
         process.env.JWT_SECRET || "default_secret",
         { expiresIn: "1h" }
      );

      const responseCookies = await cookies();
      responseCookies.set("token", token, {});

      const newUser = await createNewUser({ name, email, password });
      return NextResponse.json({ newUser, token }, { status: 201 });
   } catch (error) {
      console.log(error);
      return NextResponse.json({ error: "Error adding user" }, { status: 500 });
   }
}
