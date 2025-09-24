import { motion } from "framer-motion";

export default function Skills() {
  const categories: { name: string; items: string[] }[] = [
    {
      name: "Languages",
      items: ["Java", "Python", "C", "C++", "C#", "Typescript"],
    },
    {
      name: "Data & ML Tools",
      items: ["Pandas", "NumPy", "Matplotlib", "Tensorflow", "PyTorch", "Jupyter"],
    },
    {
      name: "DevOps & Tools",
      items: ["Docker", "GitHub", "GitHub Actions", "CI / CD", "Bash / Shell"],
    },
    {
      name: "Databases",
      items: ["MongoDB", "SQL"],
    },
    {
      name: "Visualization & BI",
      items: ["Power BI", "DAX", "Microsoft Suite"],
    },
    {
      name: "Web Development",
      items: ["React", "FastAPI"],
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