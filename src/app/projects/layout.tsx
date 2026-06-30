import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Amarachi Investment Company Ltd",
  description: "Explore our ongoing and completed projects including Julius Nyerere Hydropower Plant, Standard Gauge Railway, NSSF Warehouse, TARURA Road, and more infrastructure developments across Tanzania.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects | Amarachi Investment Company Ltd",
    description: "Ongoing and completed infrastructure, mining, quarrying, road, and building projects across Tanzania.",
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
