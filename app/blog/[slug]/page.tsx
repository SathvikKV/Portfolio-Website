import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { blogPosts } from "@/lib/data";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { Reveal, SplitReveal } from "@/components/site/reveal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return post ? { title: `${post.title} · Sathvik Vadavatha`, description: post.excerpt } : {};
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="container pb-32 pt-28">
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <Link href="/blog" className="label link-draw hover:text-ink">
            ← Writing
          </Link>
          <span className="label">
            {post.date} · {post.readTime}
          </span>
        </div>
        <article className="mx-auto max-w-[44rem] pt-16">
          <SplitReveal
            as="h1"
            immediate
            text={post.title}
            className="display text-[clamp(2.6rem,6vw,5rem)] leading-[0.98] text-ink"
          />
          <Reveal delay={0.3}>
            <p className="hl mt-6 text-2xl leading-snug text-pine">{post.excerpt}</p>
            <p className="label mt-8">{post.tags.join(" · ")}</p>
          </Reveal>
          <Reveal
            delay={0.4}
            className="prose prose-lg mt-14 max-w-none border-t border-rule pt-10 prose-headings:font-display prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-ink prose-p:text-ink-2 prose-a:text-pine prose-strong:text-ink"
          >
            <Markdown>{post.content}</Markdown>
          </Reveal>
        </article>
      </main>
      <Footer />
    </>
  );
}
