import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { domainLabels, projects } from "@/lib/data";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import { Plate } from "@/components/site/plate";
import { Reveal, SplitReveal } from "@/components/site/reveal";
import { Tech } from "@/components/site/tech-icon";
import { Track } from "@/components/site/track";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: `${project.title} · Sathvik Vadavatha`, description: project.description } : {};
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();

  const next = projects[(index + 1) % projects.length];
  const pairs = (project.challenges ?? []).map((c, i) => ({ challenge: c, solution: project.solutions?.[i] }));
  const stack = project.techStackDetailed ?? [{ category: "Tools", technologies: project.tags }];
  const links = [
    project.githubUrl && { label: "Source code", href: project.githubUrl },
    project.demoUrl && { label: "Live demo", href: project.demoUrl },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <>
      <Header />
      <main className="pt-28">
        <article>
          <header className="container">
            <div className="flex items-center justify-between border-b border-rule pb-4">
              <Link href="/#work" className="label link-draw hover:text-ink">
                ← Index of work
              </Link>
              <span className="label">
                No. {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <div className="grid gap-10 pt-14 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <span className="label text-pine">{domainLabels[project.domain]}</span>
              </div>
              <div className="md:col-span-9">
                <SplitReveal
                  as="h1"
                  immediate
                  text={project.title}
                  className="display text-[clamp(3.4rem,9vw,9rem)] leading-[0.92] text-ink"
                />
                {project.metric && (
                  <Reveal delay={0.3}>
                    <p className="hl mt-4 text-[clamp(1.4rem,2.4vw,2.2rem)] text-pine">{project.metric}</p>
                  </Reveal>
                )}
              </div>
            </div>

            <Reveal delay={0.4} className="mt-14 grid gap-10 border-t border-rule pt-8 md:grid-cols-12 md:gap-8">
              <p className="font-display text-[clamp(1.25rem,1.8vw,1.6rem)] font-normal leading-[1.4] text-ink md:col-span-6 md:col-start-4">
                {project.description}
              </p>
              <dl className="space-y-5 md:col-span-3">
                <div>
                  <dt className="label">Stack</dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-ink-2">{project.tags.join(", ")}</dd>
                </div>
                {links.length > 0 && (
                  <div>
                    <dt className="label">Links</dt>
                    <dd className="mt-2 space-y-1">
                      {links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-undraw block w-fit text-[15px] text-ink"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </Reveal>
          </header>

          <Reveal delay={0.2} className="container mt-16">
            <div className="print-on">
              <Plate
                project={project}
                className="aspect-[16/9] w-full"
                sizes="(max-width: 1360px) 100vw, 1360px"
                priority
                parallax={false}
              />
            </div>
          </Reveal>

          {project.gallery && project.gallery.length > 1 && (
            <section className="mt-24">
              <div className="container mb-8 flex items-baseline justify-between border-t border-rule pt-5">
                <span className="label">Plates</span>
                <span className="label">{project.gallery.length} screens</span>
              </div>
              <Track label={`${project.title} screenshots`} itemClassName="w-[86vw] md:w-[min(62vw,820px)]">
                {project.gallery.map((src, i) => (
                  <figure key={src} className="group">
                    <div className="relative aspect-[16/9] overflow-hidden bg-paper-3">
                      <div data-parallax className="absolute inset-0">
                        <Image
                          src={src}
                          alt={`${project.title} screen ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 86vw, 820px"
                          className="print object-cover object-top"
                          draggable={false}
                        />
                      </div>
                    </div>
                    <figcaption className="label mt-3">Plate {i + 1}</figcaption>
                  </figure>
                ))}
              </Track>
            </section>
          )}

          {project.longDescription && (
            <section className="container mt-28 grid gap-8 md:grid-cols-12">
              <Reveal className="md:col-span-3">
                <span className="label">Overview</span>
              </Reveal>
              <Reveal delay={0.05} className="md:col-span-8">
                <p className="font-display text-[clamp(1.4rem,2.2vw,2.1rem)] font-normal leading-[1.4] tracking-[-0.01em] text-ink">
                  {project.longDescription}
                </p>
              </Reveal>
            </section>
          )}

          {pairs.length > 0 && (
            <section className="container mt-28">
              <div className="grid gap-6 border-t border-rule pt-6 md:grid-cols-12 md:gap-8">
                <span className="label md:col-span-3">Problems & approach</span>
                <SplitReveal
                  text={"The hard parts,\n*and how they were solved.*"}
                  className="display text-[clamp(2.2rem,4.6vw,4.4rem)] leading-[0.98] text-ink md:col-span-9"
                />
              </div>
              <ol className="mt-14">
                {pairs.map((p, i) => (
                  <Reveal key={i} className="grid gap-4 border-t border-rule py-8 md:grid-cols-12 md:gap-8">
                    <span className="hl text-3xl text-pine md:col-span-1 md:col-start-3">{i + 1}.</span>
                    <p className="font-display text-xl font-normal leading-snug text-ink md:col-span-4">{p.challenge}</p>
                    {p.solution && (
                      <p className="text-[15.5px] leading-relaxed text-ink-2 md:col-span-4 md:col-start-9">{p.solution}</p>
                    )}
                  </Reveal>
                ))}
              </ol>
            </section>
          )}

          <section className="container mt-24">
            <div className="grid gap-8 border-t border-rule pt-6 md:grid-cols-12">
              <span className="label md:col-span-3">Built with</span>
              <div className="grid gap-8 sm:grid-cols-3 md:col-span-9">
                {stack.map((s, i) => (
                  <Reveal key={s.category} delay={i * 0.06} className="group">
                    <p className="font-display text-xl text-ink">{s.category}</p>
                    <ul className="mt-3 space-y-1.5 text-[15px] text-ink-2">
                      {s.technologies.map((t) => (
                        <li key={t}>
                          <Tech name={t} iconClassName="h-3.5 w-3.5" />
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </article>

        <Link href={`/projects/${next.slug}`} className="group mt-32 block border-t border-rule">
          <div className="container grid items-end gap-8 py-16 md:grid-cols-12 md:py-24">
            <div className="md:col-span-3">
              <span className="label">Next entry</span>
              <div className="relative mt-5 hidden aspect-[4/3] w-full overflow-hidden md:block">
                <Plate project={next} className="absolute inset-0" parallax={false} showSpec={false} sizes="300px" />
              </div>
            </div>
            <div className="md:col-span-9">
              <p className="display text-[clamp(3rem,8vw,8rem)] leading-[0.92] text-ink transition-transform duration-700 ease-out group-hover:translate-x-3">
                {next.title} <span className="hl text-pine">→</span>
              </p>
            </div>
          </div>
        </Link>
      </main>
      <Footer />
    </>
  );
}
