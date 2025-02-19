import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userEmail, userName } = await req.json();

  return NextResponse.json({
    userEmail,
    userName,
  });
}

