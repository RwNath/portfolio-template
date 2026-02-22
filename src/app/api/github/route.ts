import { NextResponse } from "next/server";
import { DATA } from "@/data/resume";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${DATA.stats.github.username}`,
      {
        method: "GET",
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub stats" },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
