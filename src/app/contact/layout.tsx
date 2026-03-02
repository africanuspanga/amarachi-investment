import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Amarachi Investment Company Ltd",
  description: "Request a quote, book a site visit, or ask about equipment availability. Contact Amarachi Investment Company Ltd today.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
