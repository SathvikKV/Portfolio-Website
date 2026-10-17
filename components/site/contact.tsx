"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { profile } from "@/lib/profile";
import { Reveal, SplitReveal, ease } from "./reveal";

const FORMSPREE = "https://formspree.io/f/mvgkdpov";

type Status = "idle" | "sending" | "sent" | "error";

function Field({
  label,
  textarea,
  ...props
}: { label: string; textarea?: boolean } & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const cls =
    "peer w-full resize-none border-0 border-b border-paper/25 bg-transparent px-0 pb-3 pt-7 text-lg text-paper outline-none transition-colors duration-500 placeholder:text-transparent focus:border-paper";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea rows={3} placeholder={label} className={cls} {...props} />
      ) : (
        <input placeholder={label} className={cls} {...props} />
      )}
      <span className="pointer-events-none absolute left-0 top-7 origin-left text-lg text-paper/50 transition-all duration-500 ease-out peer-focus:top-0 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:scale-75">
        {label}
      </span>
    </label>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const links = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    { label: "Résumé", href: profile.resume },
    { label: profile.phone, href: profile.phoneHref },
  ];

  return (
    <section id="contact" className="relative bg-pine-deep text-paper">
      <div className="container py-20 md:py-28">
        <div className="flex gap-6 border-t border-paper/20 pt-6">
          <span className="label text-pine-soft">07 /</span>
          <span className="label text-paper/50">Contact</span>
        </div>

        <SplitReveal
          text={"Have a problem\nworth *solving?*"}
          className="display mt-12 text-[clamp(3.2rem,10vw,10rem)] leading-[0.9] text-paper [&_.text-pine]:text-pine-soft"
        />

        <Reveal delay={0.2} className="mt-12">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-baseline gap-4 font-display text-[clamp(1.4rem,3.4vw,3rem)] font-normal text-paper"
          >
            <span className="link-undraw">{profile.email}</span>
            <span className="text-pine-soft transition-transform duration-500 ease-out group-hover:translate-x-2">→</span>
          </a>
        </Reveal>

        <div className="mt-24 grid gap-16 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-4">
            <p className="max-w-sm text-[15px] leading-relaxed text-paper/60">
              Open to software, AI and data engineering roles, collaborations and interesting problems. Based in{" "}
              {profile.location}.
            </p>
            <ul className="mt-10 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("tel") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between border-b border-paper/15 pb-3 text-[17px] text-paper"
                  >
                    <span className="transition-transform duration-500 ease-out group-hover:translate-x-1.5">{l.label}</span>
                    <span className="text-paper/40 transition-colors group-hover:text-pine-soft">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
            <form onSubmit={submit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Your name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <Field
                label="What are you working on?"
                name="message"
                textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={status}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="text-[14px] text-paper/55"
                  >
                    {status === "sent" && "Thank you. Your note is on its way."}
                    {status === "error" && "That didn’t go through. Email me directly instead."}
                    {(status === "idle" || status === "sending") && "Goes straight to my inbox."}
                  </motion.span>
                </AnimatePresence>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-4 text-[17px] text-paper disabled:opacity-50"
                >
                  <span className="link-draw">{status === "sending" ? "Sending…" : "Send message"}</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pine text-paper transition-transform duration-500 ease-out group-hover:scale-110">
                    →
                  </span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
