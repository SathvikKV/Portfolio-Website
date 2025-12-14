import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const projectIndex = projects.findIndex((p) => p.slug === params.slug);
    const project = projects[projectIndex];

    if (!project) {
        notFound();
    }

    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    return (
        <div className="min-h-screen bg-black text-white relative">
            <Navbar />

            {/* Floating Navigation (Desktop) */}
            {prevProject && (
                <Link
                    href={`/projects/${prevProject.slug}`}
                    className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 group"
                    aria-label="Previous Project"
                >
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap border border-white/10">
                        {prevProject.title}
                    </div>
                    <Button variant="outline" size="icon" className="rounded-full bg-black/50 backdrop-blur-sm border-white/20 hover:bg-white/10 hover:border-orange-500 h-12 w-12 transition-all group-hover:scale-110">
                        <ArrowLeft className="h-6 w-6 text-gray-300 group-hover:text-orange-500" />
                    </Button>
                </Link>
            )}

            {nextProject && (
                <Link
                    href={`/projects/${nextProject.slug}`}
                    className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 group"
                    aria-label="Next Project"
                >
                    <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap border border-white/10">
                        {nextProject.title}
                    </div>
                    <Button variant="outline" size="icon" className="rounded-full bg-black/50 backdrop-blur-sm border-white/20 hover:bg-white/10 hover:border-orange-500 h-12 w-12 transition-all group-hover:scale-110">
                        <ArrowRight className="h-6 w-6 text-gray-300 group-hover:text-orange-500" />
                    </Button>
                </Link>
            )}

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center text-gray-400 hover:text-orange-500 mb-8 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="outline"
                                        className="border-orange-500/50 text-orange-500"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                {project.longDescription || project.description}
                            </p>

                            <div className="flex gap-4 mb-12">
                                {project.githubUrl && (
                                    <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-700">
                                        <Link href={project.githubUrl} target="_blank">
                                            <Github className="mr-2 h-5 w-5" />
                                            View Code
                                        </Link>
                                    </Button>
                                )}
                                {project.demoUrl && (
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 border-none"
                                    >
                                        <Link href={project.demoUrl} target="_blank">
                                            <ExternalLink className="mr-2 h-5 w-5" />
                                            Live Demo
                                        </Link>
                                    </Button>
                                )}
                            </div>

                            {project.challenges && (
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4 text-orange-500">
                                        Challenges
                                    </h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                                        {project.challenges.map((challenge, i) => (
                                            <li key={i}>{challenge}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.solutions && (
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4 text-orange-500">
                                        Solutions
                                    </h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                                        {project.solutions.map((solution, i) => (
                                            <li key={i}>{solution}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="space-y-8">
                            <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-800">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {project.techStackDetailed && (
                                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                                    <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                                    <div className="space-y-4">
                                        {project.techStackDetailed.map((stack) => (
                                            <div key={stack.category}>
                                                <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
                                                    {stack.category}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {stack.technologies.map((tech) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="secondary"
                                                            className="bg-gray-800 text-gray-200"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center lg:hidden">
                        {prevProject ? (
                            <Button asChild variant="ghost" className="text-gray-400 hover:text-orange-500 hover:bg-transparent pl-0">
                                <Link href={`/projects/${prevProject.slug}`}>
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    <div className="text-left">
                                        <div className="text-xs text-gray-500">Previous Project</div>
                                        <div className="font-semibold">{prevProject.title}</div>
                                    </div>
                                </Link>
                            </Button>
                        ) : (
                            <div />
                        )}

                        {nextProject ? (
                            <Button asChild variant="ghost" className="text-gray-400 hover:text-orange-500 hover:bg-transparent pr-0">
                                <Link href={`/projects/${nextProject.slug}`}>
                                    <div className="text-right">
                                        <div className="text-xs text-gray-500">Next Project</div>
                                        <div className="font-semibold">{nextProject.title}</div>
                                    </div>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
