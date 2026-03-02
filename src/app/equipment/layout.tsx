import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment Fleet | Amarachi Investment Company Ltd",
  description: "View our modern fleet of heavy equipment and machinery. Excavators, loaders, graders, trucks, and more available for hire in Tanzania.",
};

export default function EquipmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
