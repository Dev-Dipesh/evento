import { SignUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
  const body: Record<string, unknown> = await request.json();

  const result = SignUpSchema.safeParse(body);
  let zodErrors = {};

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { id: Math.floor(Math.random() * 1000) + 1 }
  );
}
