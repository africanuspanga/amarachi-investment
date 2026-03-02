import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Amarachi Investment Company Ltd",
  description: "Learn about Amarachi Investment Company Ltd - Tanzania's trusted partner in civil construction, transportation, and infrastructure development.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
