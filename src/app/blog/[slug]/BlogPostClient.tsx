"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeUp } from "@/components/ui/Animations";

interface BlogPostContent {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: React.ReactNode;
}

export function BlogPostClient({ post, slug }: { post: BlogPostContent | undefined; slug: string }) {
  const router = useRouter();

  if (!post) {
    return (
      <main className="relative min-h-screen bg-background pt-32 pb-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-foreground-muted mb-8">
            This post doesn&apos;t exist yet, or it&apos;s coming soon.
          </p>
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-opalite-400 hover:text-opalite-300 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-background pt-32 pb-24 px-6">
      <article className="mx-auto max-w-3xl">
        {/* Back Link */}
        <FadeUp>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-opalite-400 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Go back
          </button>
        </FadeUp>

        {/* Header */}
        <FadeUp delay={0.1}>
          <div className="mb-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-background-secondary px-3 py-1 text-xs text-opalite-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-shadow mb-4">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-foreground-muted">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </div>
        </FadeUp>

        {/* Content */}
        <FadeUp delay={0.2}>
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-6 text-foreground-muted leading-relaxed text-lg">
              {post.content}
            </div>
          </div>
        </FadeUp>
      </article>
    </main>
  );
}
