import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">Ben Weber</Link>
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/projects" className="hover:text-gray-900">Projects</Link>
          <Link href="/about" className="hover:text-gray-900">About</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
