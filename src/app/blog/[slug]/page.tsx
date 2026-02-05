"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { FadeUp } from "@/components/ui/Animations";

/**
 * Blog Post Page
 * 
 * Dynamic page for individual blog posts.
 */

interface BlogPostContent {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: React.ReactNode;
}

const blogPosts: Record<string, BlogPostContent> = {
  "last-name-grandson": {
    title: "My last last name is grandson. In portuguese.",
    date: "Feb 05, 2026",
    readTime: "2 min read",
    tags: ["Reflections"],
    content: (
      <>
        <p>
          Yes, I know. My first name is hard to pronounce. You can call me <strong>Ade</strong> (ah-DEH).
        </p>
        
        <p>
          This is actually my grandfather&apos;s name. <em>Adeildo</em>. My family calls me <em>Neto</em>, 
          means &quot;grandson&quot; in Portuguese. Though hard to say and spell, I love it because I always
          carry his memory with me whenever I say "Hi, I'm Adeildo".
        </p>

        <p>
          The story goes deeper. Growing up in Brazil, names like mine are... not common. And when I moved to the United States for college, 
          I quickly realized that &quot;Adeildo Vieira Silva Neto&quot; wasn&apos;t exactly the easiest name to say.
        </p>

        <p>
          And, as you can imagine, my first few weeks at Duke were all about creative pronunciations. 
          &quot;A-del-do?&quot; &quot;Ah-dill-doh?&quot; &quot;...A?&quot; Do you have a nickname?
        </p>

        <p>
          I learned to smile and gently correct, but eventually I just started introducing myself as Ade. 
          It stuck. It&apos;s simple, it&apos;s me, and it saves everyone a bit of anxiety after trying to pronounce it.
        </p>

        <p>
          But there&apos;s something beautiful about carrying a name with so much weight. My grandfather 
          was a hardworking man from the northeast of Brazil. He didn&apos;t have the opportunities I have now. 
          Every time someone asks about my name, I get to share a piece of that story.
        </p>

        <p>
          So yes, my last last name is grandson, and it is a reminder of where I come from!
        </p>
      </>
    ),
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const post = blogPosts[slug];

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
