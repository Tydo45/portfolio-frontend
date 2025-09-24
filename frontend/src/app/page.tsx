"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileCode,
  Terminal,
  Server,
  Package,
  Table,
} from "lucide-react";


import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  const nav = useMemo(
    () => [
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <SiteHeader nav={nav} />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <SiteFooter />
      <JsonLd />
    </main>
  );
}

function JsonLd() {
  // Basic SEO structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Benjamin Weber",
    url: "https://weberbw.com",
    sameAs: [
      "https://github.com/Tydo45",
      "https://www.linkedin.com/in/benjaminweber03",
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
