import { motion } from "framer-motion";

export default function Experience() {
  const roles = [
    {
      org: "MP Systems Inc.",
      title: "Business Intelligence Intern",
      time: "June 2025 — Present",
      bullets: [
        "Built automated PDF invoice extraction using multimodal LLMs, eliminating manual line-item entry.",
        "Designed Power BI dashboards with DAX and SQL to deliver actionable insights.",
        "Streamlined reporting workflows, boosting team efficiency and decision-making speed.",
      ],
    },
    {
      org: "MSOE",
      title: "CS Student, Senior",
      time: "2022 — 2026 (expected)",
      bullets: [
        "Focus: AI & Machine Learning",
        "Built research prototypes for LLM data extraction",
      ],
    },
  ];
  return (
    <section id="experience" className="py-16">
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