import { NextRequest, NextResponse } from "next/server";
import { playlist } from "@/mockdata/playlist";

export async function GET(_request: NextRequest) {
  return NextResponse.json(playlist);
}

export async function POST(request: NextRequest) {
  const res = await request.json();
  
  playlist.items.push(res);

  return NextResponse.json(playlist);
}
