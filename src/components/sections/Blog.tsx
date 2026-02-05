"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { ArrowRight, Calendar, Clock } from "lucide-react";

/**
 * Blog Section
 * 
 * Teaser for blog posts with:
 * - Featured/recent posts preview
 * - Link to full blog page
 * - Reading time estimates
 */

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Lorem Ipsum: A Developer's Journey",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    slug: "lorem-ipsum-developers-journey",
    tags: ["Career", "Reflections"],
  },
  {
    title: "Building Modern Web Applications",
    excerpt: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    slug: "building-modern-web-apps",
    tags: ["React", "Next.js"],
  },
  {
    title: "Lessons from My First Internship",
    excerpt: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    date: "Nov 10, 2025",
    readTime: "6 min read",
    slug: "lessons-first-internship",
    tags: ["Career", "Learning"],
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
          <a
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-opalite-400 text-shadow transition-colors hover:text-opalite-300"
          >
            Read more
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </article>
    </StaggerItem>
  );
}

export function Blog() {
  return (
    <section
      id="blog"
      className="relative z-10 py-24 px-6 md:py-32"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-opalite-900/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Section Header */}
        <FadeUp>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-opalite-400 text-shadow">
            Blog
          </p>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-shadow sm:text-4xl md:text-5xl">
            Thoughts & Writing
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mb-12 text-lg text-foreground-muted text-shadow-sm">
            Sharing what I learn along the way. Technical insights, career reflections, 
            and things I find interesting.
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

        {/* View All Link */}
        <FadeUp delay={0.5}>
          <div className="mt-12 text-center">
            <a
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-md border border-white/10 px-6 py-3 font-medium text-foreground text-shadow transition-all hover:border-opalite-500/50 hover:bg-white/5"
            >
              View all posts
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
