export default function Projects() {
    return (
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-gray-600">A few things I’m working on.</p>
  
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Algorithmic Trading Platform</h2>
            <p className="mt-1 text-sm text-gray-600">
              Python/Rust-based research + backtesting + live pipelines.
            </p>
          </article>
          <article className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">AP Invoice Processing</h2>
            <p className="mt-1 text-sm text-gray-600">
              LLM-powered extraction and validation with a custom dashboard.
            </p>
          </article>
        </div>
      </section>
    );
  }
  