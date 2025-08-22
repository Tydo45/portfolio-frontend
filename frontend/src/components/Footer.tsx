export default function Footer() {
    return (
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ben Weber • weberbw.com
        </div>
      </footer>
    );
  }
  