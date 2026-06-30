import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | Amarachi Investment Company Ltd",
  description: "Request a quote for civil engineering, building construction, transportation, equipment hire, and ECTS tracking services in Tanzania.",
  alternates: {
    canonical: "/quote-request",
  },
  openGraph: {
    title: "Request a Quote | Amarachi Investment Company Ltd",
    description: "Get a quote for construction, transport, and equipment services in Tanzania.",
    url: "/quote-request",
  },
};

export default function QuoteRequestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
