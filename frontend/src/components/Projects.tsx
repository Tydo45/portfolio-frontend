import { motion } from "framer-motion";
import { ExternalLink, LinkIcon } from "lucide-react";

export default function Projects() {
    const projects = [
      {
        title: "AP Dashboard & Invoice Processing",
        summary:
          "Company-wide AP workflow: PDF ingestion, LLM line-item parsing, SQL DW integrations, and React dashboard with row-level edits.",
        tags: ["FastAPI", "SQL Server", "React", "pandas", "LLM"],
        link: { href: "#", label: "Case Study" },
      },
      {
        title: "Know Your Candidate",
        summary:
          "Civic platform tracking candidate bios, stances, sources, and changes over time. Next.js frontend + scraping + summarization.",
        tags: ["Next.js", "Tailwind", "FastAPI", "LLMs", "Scraping"],
        link: { href: "#", label: "Preview" },
      },
      {
        title: "Quant Research Stack",
        summary:
          "Modular Python platform for backtesting and model iteration. Cluster-based training by correlation, rich dashboards, CI/CD.",
        tags: ["Python", "pandas", "sklearn", "Docker", "CI/CD"],
        link: { href: "#", label: "Notes" },
      },
    ];
  
    return (
      <section id="projects" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Projects</h2>
            <a href="https://github.com/Tydo45" target="_blank" className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">
              See all <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <a
                    href={p.link.href}
                    className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                  >
                    {p.link.label} <LinkIcon className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-3 text-sm text-gray-600">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    );
  }