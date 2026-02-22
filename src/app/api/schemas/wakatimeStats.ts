import { z } from "zod";

export const WakatimeStatsSchema = z.object({
  data: z.object({
    status: z.string(),
    categories: z.array(
      z.object({
        name: z.string(),
        total_seconds: z.string(),
        percent: z.string(),
        digital: z.string(),
        decimal: z.string(),
        text: z.string(),
        hours: z.string(),
        minutes: z.string(),
      }),
    ),
    editors: z.array(
      z.object({
        total_seconds: z.string(),
        name: z.string(),
        percent: z.string(),
        digital: z.string(),
        decimal: z.string(),
        text: z.string(),
        hours: z.string(),
        minutes: z.string(),
      }),
    ),
    daily_average: z.string(),
    languages: z.array(
      z.object({
        name: z.string(),
        total_seconds: z.string(),
        percent: z.string(),
        digital: z.string(),
        decimal: z.string(),
        text: z.string(),
        hours: z.string(),
        minutes: z.string(),
      }),
    ),
    total_seconds: z.number(),
    username: z.string(),
  }),
});

export type WakatimeStats = z.infer<typeof WakatimeStatsSchema>;
