import { z } from "zod";

export const GithubStatsSchema = z.object({
  login: z.string(),
  public_repos: z.number(),
  followers: z.number(),
  following: z.number(),
});

export type GithubStats = z.infer<typeof GithubStatsSchema>;
