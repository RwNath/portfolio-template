import { DATA } from "@/data/resume";
import { slugify } from "@/lib/slugify";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = DATA.blog.find(p => slugify(p.title) === slug);

    if (!post) return notFound();

    return (
        <article className="min-h-screen py-16 bg-background">
            <div className="container max-w-3xl mx-auto space-y-8 px-4">
                <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                    <ArrowLeft className="h-4 w-4" /> Back to blog
                </Link>

                <header className="space-y-2">
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary">{post.tag}</Badge>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h1 className="text-4xl font-bold leading-snug">{post.title}</h1>
                </header>

                <section className="max-w-full text-muted-foreground">
                    {post.description.split("\n\n").map((para, idx) => (
                        <p key={idx}>{para}</p>
                    ))}
                </section>

                <Separator />

                <section className="max-w-full text-muted-foreground">
                    {post.content.split("\n\n").map((para, idx) => {
                        if (para.trim().startsWith("-")) {
                            const items = para.split("\n").map(line => line.replace(/^\s*-\s*/, "").trim());

                            return (
                                <ul key={idx} className="list-disc pl-6 space-y-1">
                                    {items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            );
                        }

                        return <p key={idx}>{para}</p>;
                    })}
                </section>
            </div>
        </article>
    );
}
