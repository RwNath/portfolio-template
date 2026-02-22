import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { slugify } from "@/lib/slugify";

type BlogCardProps = {
  title: string;
  description: string;
  date: string;
  tag: string;
};

export function BlogCard({ title, description, date, tag }: BlogCardProps) {
  const slug = slugify(title);

  return (
    <Link href={`/blog/${slug}`} className="block">
      <Card className="group relative overflow-hidden backdrop-blurborder border-border/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
        <div className="p-4 space-y-3">
          <Badge variant="secondary" className="text-xs px-2 py-0.5">
            {tag}
          </Badge>

          <h2 className="text-base font-medium leading-snug group-hover:text-primary transition-colors">
            {title}
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>

          <div className="text-xs text-muted-foreground">{date}</div>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      </Card>
    </Link>
  );
}
