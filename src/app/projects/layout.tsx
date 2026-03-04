import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Amarachi Investment Company Ltd",
  description: "Explore our ongoing and completed projects including Julius Nyerere Hydropower Plant, Standard Gauge Railway, and more infrastructure developments across Tanzania.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
