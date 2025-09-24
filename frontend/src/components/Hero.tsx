import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileCode, Terminal, Server, Package, Table } from "lucide-react";

export default function Hero() {
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
              Turning ideas into code
            </motion.h1>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl">
              Senior Computer Science student at Milwaukee School of Engineering specializing in AI and machine learning. Experienced in developing Transformer models and applying multimodal LLMs to real-world problems. I am proficient in Docker, Git, MongoDB, and SQL. Demonstrated leadership through technical club involvement and collaborative projects. Seeking to apply technical expertise and passion for AI in innovative tech environments.
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
                href="https://www.linkedin.com/in/benjaminweber03"
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
    { icon: <FileCode className="h-5 w-5" />, label: "Node/React" }, 
    { icon: <Terminal className="h-5 w-5" />, label: "Python/FastAPI" }, 
    { icon: <Server className="h-5 w-5" />, label: "SQL Server" }, 
    { icon: <Package className="h-5 w-5" />, label: "Docker" }, 
    { icon: <Table className="h-5 w-5" />, label: "Numpy/Pandas" }, 
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