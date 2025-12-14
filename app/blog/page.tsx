import { blogPosts } from "@/lib/data";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <Link
                        href="/"
                        className="inline-flex items-center text-gray-400 hover:text-orange-500 mb-8 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>

                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thoughts & Insights</h1>
                        <p className="text-gray-400 text-lg mb-12">
                            Deep dives into engineering challenges, system design, and the occasional rant about web standards.
                        </p>

                        <div className="grid gap-6">
                            {blogPosts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`}>
                                    <Card className="bg-gray-900 border-gray-800 hover:border-orange-500/50 transition-colors">
                                        <CardContent className="p-6">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                                <div className="flex items-center gap-3 text-sm text-gray-400">
                                                    <span>{post.date}</span>
                                                    <span>•</span>
                                                    <span>{post.readTime}</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    {post.tags.map((tag) => (
                                                        <Badge key={tag} variant="outline" className="border-gray-700 text-gray-300">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <h2 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-400 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
