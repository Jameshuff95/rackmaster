// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();
    const newUser = await prisma.user.create({ data: { name, email } });
    return NextResponse.json(newUser);
  } catch (error) {
    console.error("User creation failed:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 },
    );
  }
}
