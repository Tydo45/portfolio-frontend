export default function Navbar() {
    return (
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="/" className="font-semibold">Ben Weber</a>
          <nav className="flex gap-6 text-sm text-gray-600">
            <a href="/projects" className="hover:text-gray-900">Projects</a>
            <a href="/about" className="hover:text-gray-900">About</a>
            <a href="/contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  