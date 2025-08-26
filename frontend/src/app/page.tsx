"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Link as LinkIcon, ExternalLink, Code2, Cpu, Database, BarChart3, Network } from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Projects from "@/components/Projects";

export default function Home() {
  const nav = useMemo(
    () => [
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "writing", label: "Writing" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <SiteHeader nav={nav} />
      <Hero />
      {/* <QuickStats /> */}
      <Projects />
      <Experience />
      <Skills />
      <Writing />
      <Contact />
      <SiteFooter />
      <JsonLd />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-gray-100" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight"
            >
              Building reliable software and data systems — end to end.
            </motion.h1>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl">
              Junior CS student, data engineer, and builder. I ship full‑stack apps, automate data pipelines, and prototype ML‑powered products. Currently crafting an invoice processing platform at work and a trading research stack at home.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-black"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Tydo45"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-4 py-2.5 text-sm font-medium hover:bg-gray-100"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/weberbw"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-4 py-2.5 text-sm font-medium hover:bg-gray-100"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gray-200 via-gray-100 to-white blur-2xl" />
              <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <TechStackCloud />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackCloud() {
  const items = [
    { icon: <Code2 className="h-5 w-5" />, label: "TypeScript" },
    { icon: <Cpu className="h-5 w-5" />, label: "Python/FastAPI" },
    { icon: <Database className="h-5 w-5" />, label: "SQL Server" },
    { icon: <Network className="h-5 w-5" />, label: "Docker" },
    { icon: <BarChart3 className="h-5 w-5" />, label: "Pandas/LLMs" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 flex items-center gap-2"
        >
          {it.icon}
          <span className="text-sm font-medium">{it.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

function Experience() {
  const roles = [
    {
      org: "PPC Partners / MetroPower",
      title: "Software & Data Intern",
      time: "May 2025 — Present",
      bullets: [
        "Built AP invoice processing pipeline: PDF → LLM line items → SQL DW → React dashboard.",
        "Optimized safety & finance Power BI reports; tuned SQL queries and relationships.",
        "Led internal tooling: PyInstaller packaging, GitHub Actions, Dockerized services.",
      ],
    },
    {
      org: "MSOE",
      title: "CS Student, Junior",
      time: "2023 — 2026 (expected)",
      bullets: [
        "Focus: systems, data engineering, ML, distributed compute (Slurm/HPC).",
        "Built research prototypes for LLM summarization and time-series modeling.",
      ],
    },
  ];
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Experience</h2>
        <div className="mt-8 space-y-6">
          {roles.map((r, i) => (
            <motion.div
              key={r.org}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-gray-200 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-wide text-gray-500">{r.time}</div>
                  <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                  <div className="text-gray-600">{r.org}</div>
                </div>
              </div>
              <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
                {r.bullets.map((b) => (
                  <li key={b} className="marker:text-gray-400">{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const categories: { name: string; items: string[] }[] = [
    {
      name: "Languages",
      items: ["TypeScript", "Python", "SQL", "Rust (learning)", "Bash"],
    },
    {
      name: "Frameworks",
      items: ["Next.js", "FastAPI", "React", "Tailwind", "Power BI"],
    },
    {
      name: "Data & Infra",
      items: ["SQL Server", "pandas", "scikit‑learn", "Docker", "GitHub Actions"],
    },
    {
      name: "Platforms",
      items: ["Raspberry Pi", "Vercel", "Cloudflare Tunnels", "WSL", "Slurm/HPC"],
    },
  ];
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-gray-200 bg-white p-6"
            >
              <div className="text-sm uppercase tracking-wide text-gray-500">{cat.name}</div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <li key={s} className="rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writing() {
  const posts = [
    {
      title: "Designing an LLM‑assisted AP pipeline (notes)",
      date: "Aug 2025",
      summary:
        "Scraper → validator → LLM formatter → consistency testing. Lessons from productionizing invoice extraction.",
      href: "#",
    },
    {
      title: "Correlation clusters for strategy training",
      date: "Jul 2025",
      summary:
        "Using rolling correlation to form training clusters and reduce overfitting in time‑series models.",
      href: "#",
    },
    {
      title: "Next.js + FastAPI on a Raspberry Pi via Cloudflare Tunnels",
      date: "Jun 2025",
      summary:
        "Notes on CI/CD, GHCR, systemd units, and dev vs prod toggles.",
      href: "#",
    },
  ];
  return (
    <section id="writing" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Writing</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">
            All posts <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-gray-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition block"
            >
              <div className="text-sm uppercase tracking-wide text-gray-500">{p.date}</div>
              <h3 className="mt-1 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.summary}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Get in touch</h2>
              <p className="mt-3 text-gray-600">
                The fastest way to reach me is email. I’m open to internships, freelance projects, and collaborations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:ben@weberbw.com"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-black"
                >
                  <Mail className="h-4 w-4" /> ben@weberbw.com
                </a>
                <a
                  href="https://github.com/Tydo45"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-4 py-2.5 text-sm font-medium hover:bg-gray-100"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/weberbw"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-4 py-2.5 text-sm font-medium hover:bg-gray-100"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-semibold">Elsewhere</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><ExternalLink className="h-4 w-4"/> <a href="https://weberbw.com" className="hover:underline">weberbw.com</a></li>
                  <li className="flex items-center gap-2"><Github className="h-4 w-4"/> <a href="https://github.com/Tydo45" className="hover:underline">github.com/Tydo45</a></li>
                  <li className="flex items-center gap-2"><Linkedin className="h-4 w-4"/> <a href="https://www.linkedin.com/in/weberbw" className="hover:underline">linkedin.com/in/weberbw</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JsonLd() {
  // Basic SEO structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ben Weber",
    url: "https://weberbw.com",
    sameAs: [
      "https://github.com/Tydo45",
      "https://www.linkedin.com/in/weberbw",
    ],
    jobTitle: "Computer Science Student & Software Developer",
    worksFor: { "@type": "Organization", name: "PPC Partners" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
