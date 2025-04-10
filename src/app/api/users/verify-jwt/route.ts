import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
   //    const { token } = req.body;
   const reqCookies = await cookies();
   const token = reqCookies.get("token")?.value;
   if (!token) {
      return res.status(401).json({ error: "No token provided" });
   }
   // Verify JWT token here using your preferred method
   // For example, using jsonwebtoken library:
   const decoded = jwt.verify(token, process.env.JWT_SECRET!);

   console.log("Decoded JWT:", decoded);

   return NextResponse.json({ message: "Token is valid", decoded });
}
