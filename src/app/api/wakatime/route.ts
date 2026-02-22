import { DATA } from "@/data/resume";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch(
            `https://wakatime.com/api/v1/users/${DATA.stats.wakatime.username}/stats/all_time`,
        );

        if (!res.ok) {
            return NextResponse.json({ error: `Failed` }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed" }, { status: 500 });
    }
}
