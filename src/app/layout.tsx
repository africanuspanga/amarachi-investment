import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import ClientCartWrapper from "@/components/ClientCartWrapper";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Amarachi Investment Company Ltd",
  url: "https://www.amarachitz.com",
  logo: "https://www.amarachitz.com/new%20original%20logo.png",
  sameAs: [
    "https://www.amarachitz.com",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+255713057706",
    contactType: "customer service",
    areaServed: "TZ",
    availableLanguage: "English",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amarachitz.com"),
  title: "Amarachi Investment Company Ltd | Civil, Building & Transport Tanzania",
  description: "Amarachi Investment Company Ltd delivers dependable civil works, building construction, transportation logistics, and heavy equipment solutions across Tanzania.",
  keywords: "civil contractor Tanzania, building contractor Dar es Salaam, equipment hire Tanzania, excavation services Tanzania, construction logistics Tanzania, tipper trucks hire, grader hire, wheel loader hire, ECTS fleet tracking, NSSF warehouse construction, TARURA road construction, rigid pavement road Tanzania",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amarachi Investment Company Ltd | Civil, Building & Transport Tanzania",
    description: "Dependable civil works, building construction, transportation logistics, and heavy equipment solutions across Tanzania.",
    url: "/",
    siteName: "Amarachi Investment Company Ltd",
    type: "website",
    locale: "en_TZ",
    images: [
      {
        url: "/new original logo.png",
        width: 1200,
        height: 630,
        alt: "Amarachi Investment Company Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarachi Investment Company Ltd | Civil, Building & Transport Tanzania",
    description: "Dependable civil works, building construction, transportation logistics, and heavy equipment solutions across Tanzania.",
    images: ["/new original logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/new original favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <CartProvider>
          <ClientCartWrapper>
            {children}
          </ClientCartWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
