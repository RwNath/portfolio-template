import { DATA } from "@/data/resume";
import { BlogCard } from "@/components/blog/layout/blog-card";

export default function BlogPage() {
    return (
        <main>
            <section className="container mx-auto px-4 pt-16 pb-10">
                <div className="max-w-2xl space-y-3">
                    <h1
                        className="
              text-3xl font-semibold tracking-tight
              bg-gradient-to-r from-primary to-purple-500
              bg-clip-text text-transparent
            "
                    >
                        Blog
                    </h1>

                    <p className="text-sm text-muted-foreground leading-relaxed">Welcome to my personal blog</p>
                </div>
            </section>

            <section className="container mx-auto px-4 pb-16">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {DATA.blog.map(post => (
                        <BlogCard key={post.title} {...post} />
                    ))}
                </div>
            </section>
        </main>
    );
}
