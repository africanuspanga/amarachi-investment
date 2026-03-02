import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Amarachi Investment Company Ltd",
  description: "Complete solutions for construction, transport, and equipment. Civil works, building construction, equipment hire, and logistics services in Tanzania.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
