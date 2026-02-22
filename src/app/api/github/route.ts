"use client";

import { useQuery } from "@tanstack/react-query";
import { DATA } from "@/data/resume";
import { GithubStats } from "@/app/api/schemas/githubStats";

export function useGithubStats() {
    return useQuery<GithubStats | null>({
        queryKey: ["githubStats", DATA.stats.github.username],
        queryFn: async () => {
            const res = await fetch(`https://api.github.com/users/${DATA.stats.github.username}`);
            if (!res.ok) return null;
            return await res.json();
        },
        staleTime: Infinity,
        retry: false,
    });
}
