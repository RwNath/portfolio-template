"use client";

import Link from "next/link";

import { DATA } from "@/data/resume";

import Tag from "@/components/tag";
import { ProjectCard } from "@/components/project-card";
import { Icons } from "@/components/icons";
import { useWakatimeStats } from "@/components/hooks/useWakatimeStats";

import { ArrowRight, Clock, MapPin, Loader, X } from "lucide-react";

import { useTime } from "@/utils-functions/time";

import { useGithubStats } from "@/app/api/github/route";

import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
    const time = useTime();
    const { data: githubStats, isLoading: githubIsLoading } = useGithubStats();
    const { data: wakatimeStats, isLoading: wakatimeIsLoading } = useWakatimeStats();

    if (githubIsLoading || wakatimeIsLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 animate-spin text-gray-400" />
            </div>
        );
    }

    if (!githubStats || !wakatimeStats) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen px-4">
                <X className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-red-400" />
                <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold">Error while loading</p>
                <p className="mt-2 text-sm text-gray-400">Please try refreshing the page or check your connection.</p>
            </div>
        );
    }

    return (
        <main className="flex flex-col items-center justify-center pt-75 px-4 sm:px-6 md:px-8 mb-6">
            <div className="flex flex-wrap gap-2 justify-center mb-4">
                <Tag icon={Clock} text={time} />
                <Tag icon={DATA.customTag.icon} text={DATA.customTag.name} />
                <Tag icon={MapPin} text={DATA.location} />
            </div>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-center">Hi ! I'm {DATA.name} !</h1>
            <p className="mt-4 text-muted-foreground text-center max-w-[600px] text-base sm:text-lg md:text-xl">
                {DATA.description}
            </p>
            <Link
                className="inline-flex items-center mt-2 gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-medium text-black bg-gradient-to-r from-indigo-300 to-violet-300 shadow-md"
                href="/blog"
            >
                See my blog
                <ArrowRight className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center w-full mt-125">
                <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                    <span className="text-background text-sm font-medium">My Projects</span>
                </div>
                <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-col gap-y-3 items-center justify-center mt-4 w-full">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-4 text-center">
                    Check out my latest work
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
                    {DATA.projects.map(project => (
                        <div key={project.title} className="h-full">
                            <ProjectCard
                                href={project.href}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                links={project.links}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {DATA.stats.enabled && (
                <section className="py-16 w-full max-w-[1000px] mx-auto">
                    <h2 className="text-2xl font-mono text-center mb-12">SOME STATS</h2>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
                        <Card className="flex flex-col items-center p-6 transition hover:scale-105 w-full sm:w-auto">
                            <CardContent className="flex flex-col items-center">
                                <Icons.github className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
                                <h3 className="font-semibold text-lg sm:text-xl">REPOSITORIES</h3>
                                <p className="text-zinc-300 font-bold text-3xl sm:text-4xl mt-1">
                                    {githubStats.public_repos}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="flex flex-col items-center p-6 transition hover:scale-105 w-full sm:w-auto">
                            <CardContent className="flex flex-col items-center">
                                <Clock className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
                                <h3 className="font-semibold text-lg sm:text-xl">CODING HOURS</h3>
                                <p className="text-zinc-300 font-bold text-3xl sm:text-4xl mt-1">
                                    {Math.floor(wakatimeStats.data.total_seconds / 3600)}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            )}
            <div className="h-20" />
        </main>
    );
}
