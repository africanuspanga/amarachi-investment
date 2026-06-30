import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment Fleet | Amarachi Investment Company Ltd",
  description: "View our modern fleet of heavy equipment and machinery. Excavators, loaders, graders, trucks, and more available for hire in Tanzania.",
  alternates: {
    canonical: "/equipment",
  },
  openGraph: {
    title: "Equipment Fleet | Amarachi Investment Company Ltd",
    description: "Modern fleet of heavy equipment and machinery available for hire in Tanzania.",
    url: "/equipment",
  },
};

export default function EquipmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
