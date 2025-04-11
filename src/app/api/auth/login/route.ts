// import type { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcryptjs"; // Assuming you are using bcryptjs for hashing
import prisma from "@/lib/prisma";
export async function POST(req: NextRequest) {
   const { email, password } = await req.json();

   if (!email || !password) {
      // return res.
      return NextResponse.json({ error: "Email and password are required" });
   }

   // Here you would typically check the credentials against your database
   // For demonstration purposes, let's assume the credentials are valid

   const user = await prisma.user.findUnique({
      where: { email },
   });

   if (!user) {
      return NextResponse.json(
         { error: "Invalid email or password" },
         { status: 401 }
      );
   }

   const isPasswordValid = await bcrypt.compareSync(password, user.password);

   if (!isPasswordValid) {
      return NextResponse.json(
         { error: "Invalid email or password" },
         { status: 401 }
      );
   }

   const token = jwt.sign(
      { email },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1h" }
   );

   const responseCookies = await cookies();
   responseCookies.set("token", token, {});

   return NextResponse.json({ message: "Login successful", token });
}
