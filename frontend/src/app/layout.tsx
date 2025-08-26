import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ben Weber — Portfolio",
  description: "Personal site underway, check back soon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased font-sans flex flex-col">
        {/* <Navbar /> */}
        <main className="flex-1">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
