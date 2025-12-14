import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Markdown from 'react-markdown';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <main className="pt-24 pb-16">
                <article className="container mx-auto px-4 max-w-3xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-gray-400 hover:text-orange-500 mb-8 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>

                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="bg-gray-800 text-gray-300"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-gray-400">
                            <time>{post.date}</time>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-gray-100 prose-p:text-gray-300 prose-a:text-orange-500 hover:prose-a:text-orange-400">
                        <Markdown>{post.content}</Markdown>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
