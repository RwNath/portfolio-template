"use client";

import { useQuery } from "@tanstack/react-query";
import type { WakatimeStats } from "@/app/api/schemas/wakatimeStats";

export function useWakatimeStats() {
  return useQuery<WakatimeStats | null>({
    queryKey: ["wakatimeStats"],
    queryFn: async () => {
      const res = await fetch("/api/wakatime");
      if (!res.ok) return null;
      return res.json();
    },
    staleTime: Infinity,
    retry: false,
  });
}
