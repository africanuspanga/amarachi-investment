import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Amarachi Investment Company Ltd | Civil, Building & Transport Tanzania",
  description: "Amarachi Investment Company Ltd delivers dependable civil works, building construction, transportation logistics, and heavy equipment solutions across Tanzania.",
  keywords: "civil contractor Tanzania, building contractor Dar es Salaam, equipment hire Tanzania, excavation services Tanzania, construction logistics Tanzania, tipper trucks hire, grader hire, wheel loader hire, ECTS fleet tracking",
  openGraph: {
    title: "Amarachi Investment Company Ltd | Civil, Building & Transport Tanzania",
    description: "Dependable civil works, building construction, transportation logistics, and heavy equipment solutions across Tanzania.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/new original favicon.png" type="image/png" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
