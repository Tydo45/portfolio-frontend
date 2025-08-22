export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Hey, I’m Ben.</h1>
      <p className="mt-3 max-w-2xl text-gray-600">
        CS student & builder. This is my portfolio where I share projects in AI, data, and systems.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a href="/projects" className="rounded-xl border bg-white p-6 shadow-sm hover:shadow">
          <h2 className="text-lg font-semibold">Projects</h2>
          <p className="mt-1 text-sm text-gray-600">Trading platform, AP invoice tooling, more.</p>
        </a>
        <a href="/about" className="rounded-xl border bg-white p-6 shadow-sm hover:shadow">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="mt-1 text-sm text-gray-600">Quick background, skills, and links.</p>
        </a>
      </div>
    </section>
  );
}
