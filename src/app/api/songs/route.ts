import { NextRequest, NextResponse } from "next/server";
import { songs } from "@/mockdata/songs";

export async function GET(_request: NextRequest) {
  return NextResponse.json(songs);
}
