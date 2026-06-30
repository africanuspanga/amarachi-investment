import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Amarachi Investment Company Ltd",
  description: "Privacy policy for Amarachi Investment Company Ltd. Learn how we protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Amarachi Investment Company Ltd",
    description: "Privacy policy for Amarachi Investment Company Ltd.",
    url: "/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
