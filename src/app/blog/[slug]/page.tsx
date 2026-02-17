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
  "lessons-first-internship": {
    title: "Lessons from My First Internship, the Code+ Program at Duke",
    date: "Feb 16, 2026",
    readTime: "5 min read",
    tags: ["Career", "Learning", "Teamwork"],
    content: (
      <>
        <p>
          Campus Space and Management. That was the name of our group during the Code+ program at Duke, my very first internship. 
          It taught me more than I expected. Not just about code, but about stakeholder relations, trade-offs, and what it actually 
          means to build something useful.
        </p>

        <p>
          There were four of us developers, two managers, and two stakeholders from Duke Facilities, Jeff and Greg. 
          Our most important resource was the short time we had.
        </p>

        <h2>The Problem</h2>

        <p>
          In our first meetings with Jeff and Greg, I started to understand what they were dealing with. 
          They had GeoJSON files--Tons of GB--representing every room and floor in campus buildings. 
          But a GeoJSON file is basically just a wall of coordinates and numbers. You open it and you do not see a map, you still have to interpret it or open it in a GIS tool to see the shapes, 
          but there are no insights. No data about occupancy. No information about how spaces were actually being used.
        </p>

        <p>
          What they had was intuition. They knew class schedules, roughly. They could guess that a room might be busy at certain 
          hours. But the reality was messier than that. Imagine ten people sitting in a giant auditorium, be freezing, because the 
          HVAC system is running full blast for a space designed for hundreds. Or picture a small classroom packed with thirty 
          students, CO₂ levels climbing, everyone warm, but the air conditioning barely on. In the winter, not enough heating. 
          In the summer, too much cooling in the wrong rooms.
        </p>

        <p>
          Lots of problems. Zero insights. And tons of time spent just to still not know for certain.
        </p>

        <p>
          We had ten weeks. Four developers, all undergrads, all learning as we went. Time was the constraint that shaped every 
          decision we made. We couldn&apos;t build everything, so we had to be smart about what we built first.
        </p>

        <p>
          We ran Agile. With sprint planning and standups. Front-end and back-end were developed in parallel, 
          and insights from our stakeholder meetings fed directly into the next sprint. Directing them through questions had us through a feedback loop. 
          Jeff and Greg would share with us what mattered most, and we&apos;d thought through it together. Every week, the tool got a little closer to what 
          they actually needed.
        </p>

        <h2>What We Built</h2>

        <p>
          The original GeoJSON files were static. You got the same view no matter what. Our tool changed that. 
          We built it so that when Jeff or Greg uploaded a GeoPandas-compatible file--or selected a specific room, 
          floor, or building--the visualization would adapt. Different inputs, different outputs. Not just a map 
          with shapes, but a interactive heat map designed for them and their team.
        </p>

        <p>
          Occupancy data, environmental readings, usage patterns -- all layered on top of the spatial data they already had. 
          Instead of staring at coordinates and guessing, they could finally see what was happening in their buildings.
        </p>

        <h2>What I Took Away</h2>

        <p>
          I learned that trade-offs are the real work of engineering. The decisions about 
          what to build, what to skip, and what to save for later. With four people and ten weeks, you can&apos;t 
          afford to build the wrong thing. And you get the right thing having thougthful conversations with your stakeholders, and being willing to pivot when you learn something new.
        </p>

        <p>
          I learned that stakeholder conversations are where the actual requirements live. In the moment when Greg says &quot;I just wish I could see which rooms are actually 
          being used&quot;--that&apos;s the requirement.
        </p>

        <p>
          And I learned that a small team, with limited time, can still build something genuinely useful, if they listen well and move with purpose. Could I have done it better? Yes. Could we have allocated more time to a faster Agile loop? Yes. But the greatest takeaway was that we built something that actually made a difference for Jeff and Greg. They could finally see their buildings in a new way, and that was the real win.
        </p>

        <p>
          Campus Space and Management!
        </p>
      </>
    ),
  },
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
