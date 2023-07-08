import { NextRequest, NextResponse } from "next/server";
import { episodes } from "@/mockdata/eposides";

export async function GET(_request: NextRequest) {
  return NextResponse.json(episodes);
}
