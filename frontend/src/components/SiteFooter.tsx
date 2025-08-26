export default function SiteFooter() {
    return (
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Ben Weber. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#projects" className="hover:text-gray-900">Projects</a>
              <a href="#experience" className="hover:text-gray-900">Experience</a>
              <a href="#skills" className="hover:text-gray-900">Skills</a>
              <a href="#writing" className="hover:text-gray-900">Writing</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }