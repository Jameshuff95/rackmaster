// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Handle POST requests to create a user
export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  const newUser = await prisma.user.create({
    data: { name, email },
  });

  return NextResponse.json(newUser);
}
