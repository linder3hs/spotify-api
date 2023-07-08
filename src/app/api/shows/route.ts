import { NextRequest, NextResponse } from "next/server";
import { shows } from "@/mockdata/show";

export async function GET(_request: NextRequest) {
  return NextResponse.json(shows);
}
