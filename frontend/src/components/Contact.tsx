import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
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
                  href="mailto:bwweber1103@gmail.com"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-black"
                >
                  <Mail className="h-4 w-4" /> bwweber1103@gmail.com
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
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="font-semibold">Elsewhere</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><ExternalLink className="h-4 w-4"/> <a href="https://weberbw.com" className="hover:underline">weberbw.com</a></li>
                  <li className="flex items-center gap-2"><Github className="h-4 w-4"/> <a href="https://github.com/Tydo45" className="hover:underline">github.com/Tydo45</a></li>
                  <li className="flex items-center gap-2"><Linkedin className="h-4 w-4"/> <a href="https://www.linkedin.com/in/benjaminweber03" className="hover:underline">linkedin.com/in/benjaminweber03</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}