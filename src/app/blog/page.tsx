"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";

/**
 * Blog Index Page
 * 
 * Lists all blog posts.
 */

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
  comingSoon?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    title: "How it was like to intern at BTG Pactual Bank",
    excerpt: "Pactual. BTG. Better Than Goldman. You name it. The people I worked gave all the names possible to BTG - they were fun, smart, and always ready to help. That made all the difference!",
    date: "Feb 07, 2025",
    readTime: "i min read",
    slug: "building-modern-web-apps",
    tags: ["OAuth2", "UAT", "Prod"],
    comingSoon: true,
  },
  {
    title: "Lessons from My First Internship, the Code+ Program at Duke",
    excerpt: "Campus Space and Management! That was the name of our super-very-nice-to-work-with group! Really. I could learn more than I expected from our coexistence that summer.",
    date: "Feb 06, 2025",
    readTime: "j min read",
    slug: "lessons-first-internship",
    tags: ["Career", "Learning"],
    comingSoon: true,
  },
  {
    title: "My last last name is grandson. In portuguese.",
    excerpt: "Yes, I know. My first name is hard to pronounce. You can call me Ade. This is actually my grandfather's name, and my...",
    date: "Feb 05, 2026",
    readTime: "2 min read",
    slug: "last-name-grandson",
    tags: ["Reflections"],
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <StaggerItem>
      <article className="group relative h-full rounded-2xl border border-white/5 bg-background-secondary p-6 transition-all duration-300 hover:border-opalite-500/30 hover:shadow-lg hover:shadow-opalite-900/10">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background-tertiary px-2 py-0.5 text-xs text-foreground-muted text-shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-3 text-xl font-semibold text-foreground text-shadow transition-colors group-hover:text-opalite-400">
          {post.title}
        </h3>

        <p className="mb-4 text-foreground-muted text-shadow-sm leading-relaxed">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-foreground-muted text-shadow-sm">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>

        {/* Read More Link */}
        <div className="mt-4 pt-4 border-t border-white/5">
          {post.comingSoon ? (
            <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted/50 cursor-not-allowed">
              Coming soon
            </span>
          ) : (
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-opalite-400 text-shadow transition-colors hover:text-opalite-300"
            >
              Read more
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </article>
    </StaggerItem>
  );
}

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-background pt-32 pb-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        {/* Back Link */}
        <FadeUp>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-opalite-400 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
            <span className="text-foreground-muted/50">|</span>
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-opalite-400 transition-colors"
            >
              Back to blog section
            </Link>
          </div>
        </FadeUp>

        {/* Section Header */}
        <FadeUp delay={0.1}>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400 text-shadow">
            Blog
          </p>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-shadow sm:text-4xl md:text-5xl">
            Thoughts & Writing
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="mb-12 text-lg text-foreground-muted text-shadow-sm">
            What does a new grad, almost fresh out of college, have to say to the world? Let&apos;s find out.
          </p>
        </FadeUp>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto max-w-6xl">
        <StaggerContainer
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
}
