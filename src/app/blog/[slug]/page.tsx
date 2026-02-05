import { BlogPostClient } from "./BlogPostClient";

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
          carry his memory with me whenever I say &quot;Hi, I&apos;m Adeildo&quot;.
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

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  return <BlogPostClient post={post} slug={slug} />;
}
