import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | Amarachi Investment Company Ltd",
  description: "Request a quote for civil engineering, building construction, transportation, equipment hire, and ECTS tracking services in Tanzania.",
};

export default function QuoteRequestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
