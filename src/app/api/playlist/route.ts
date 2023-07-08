import { NextRequest, NextResponse } from "next/server";
import { playlist } from "@/mockdata/playlist";

export async function GET(_request: NextRequest) {
  return NextResponse.json(playlist);
}
