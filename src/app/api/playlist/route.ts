import { NextRequest, NextResponse } from "next/server";
import { playlist } from "@/mockdata/playlist";

export async function GET(_request: NextRequest) {
  return NextResponse.json(playlist);
}

export async function POST(request: NextRequest) {
  const res = await request.json();
  const newPlaylist = {
    images: [
      {
        height: 640,
        url: "https://mosaic.scdn.co/640/ab67616d0000b2735c043f98ad687480ca6f0441ab67616d0000b27386afd6f8f6007e35cc882d2dab67616d0000b27390a704b3e697867936246209ab67616d0000b273cbca07f8e1eefdbbe554279e",
        width: 640,
      },
      {
        height: 300,
        url: "https://mosaic.scdn.co/300/ab67616d0000b2735c043f98ad687480ca6f0441ab67616d0000b27386afd6f8f6007e35cc882d2dab67616d0000b27390a704b3e697867936246209ab67616d0000b273cbca07f8e1eefdbbe554279e",
        width: 300,
      },
      {
        height: 60,
        url: "https://mosaic.scdn.co/60/ab67616d0000b2735c043f98ad687480ca6f0441ab67616d0000b27386afd6f8f6007e35cc882d2dab67616d0000b27390a704b3e697867936246209ab67616d0000b273cbca07f8e1eefdbbe554279e",
        width: 60,
      },
    ],
    ...res,
  };

  playlist.items.push(newPlaylist);

  return NextResponse.json(playlist);
}
