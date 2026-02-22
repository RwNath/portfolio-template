"use client";

import { useQuery } from "@tanstack/react-query";
import type { GithubStats } from "@/app/api/schemas/githubStats";
import { DATA } from "@/data/resume";

export function useGithubStats() {
  return useQuery<GithubStats | null>({
    queryKey: ["githubStats", DATA.stats.github.username],
    queryFn: async () => {
      const res = await fetch(`/api/github`);
      if (!res.ok) return null;
      return await res.json();
    },
    staleTime: Infinity,
    retry: false,
  });
}
