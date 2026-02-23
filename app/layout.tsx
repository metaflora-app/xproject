import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { CursorDroplet } from "@/components/motion";

export const metadata: Metadata = {
  title: "METAFLORA* XProject — pet projects & micro saas showcase",
  description:
    "A showcase of vibe-coded projects built inside METAFLORA*. Publish your pet projects and micro saas. Explore what others ship.",
  keywords: ["METAFLORA", "XProject", "pet projects", "micro saas", "indie"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CursorDroplet />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
