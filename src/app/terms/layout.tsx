import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Amarachi Investment Company Ltd",
  description: "Terms of service for Amarachi Investment Company Ltd. Please read these terms carefully before using our services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Amarachi Investment Company Ltd",
    description: "Terms of service for Amarachi Investment Company Ltd.",
    url: "/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
