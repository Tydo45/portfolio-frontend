import { Download, Mail } from "lucide-react";


export default function SiteHeader({
    nav,
  }: {
    nav: { id: string; label: string }[];
  }) {
    return (
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-xl">Benjamin Weber</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-gray-600 hover:text-gray-900 transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/Benjamin_Weber_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-3.5 py-2 text-sm font-medium hover:bg-gray-100"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href="mailto:ben@weberbw.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-black"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
      </header>
    );
  }