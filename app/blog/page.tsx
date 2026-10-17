import Link from "next/link";
import { blogPosts } from "@/lib/data";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { Reveal, SplitReveal } from "@/components/site/reveal";

export const metadata = { title: "Writing · Sathvik Vadavatha" };

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="container pb-32 pt-28">
        <div className="flex items-center justify-between border-b border-rule pb-4">
          <Link href="/" className="label link-draw hover:text-ink">
            ← Home
          </Link>
          <span className="label">{blogPosts.length} entries</span>
        </div>
        <div className="grid gap-8 pt-14 md:grid-cols-12">
          <span className="label text-pine md:col-span-3">Writing</span>
          <div className="md:col-span-9">
            <SplitReveal
              as="h1"
              immediate
              text={"Notes on building\n*with data and AI.*"}
              className="display text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] text-ink"
            />
          </div>
        </div>
        <ul className="mt-20 border-b border-rule">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <li className="border-t border-rule">
                <Link href={`/blog/${post.slug}`} className="group grid gap-3 py-10 md:grid-cols-12 md:gap-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3 md:col-span-3">
                    {post.date} · {post.readTime}
                  </span>
                  <div className="md:col-span-7">
                    <h2 className="font-display text-[clamp(1.8rem,3.2vw,3rem)] font-normal leading-[1.05] tracking-tight text-ink transition-transform duration-700 ease-out group-hover:translate-x-2">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-ink-2">{post.excerpt}</p>
                  </div>
                  <span className="text-[13px] text-ink-3 md:col-span-2 md:text-right">{post.tags.join(", ")}</span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
