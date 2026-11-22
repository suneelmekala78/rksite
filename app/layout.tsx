import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://rakeshkurapati.com";

export const viewport: Viewport = {
  themeColor: "#080809",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rakesh Kurapati — Founder of Fasttracks Car Care",
    template: "%s · Rakesh Kurapati",
  },
  description:
    "Official site of Rakesh Kurapati — entrepreneur, automotive lifestyle, and founder of Fasttracks Car Care in Jubilee Hills, Hyderabad. Cars. Craft. Character.",
  keywords: [
    "Rakesh Kurapati",
    "Fasttracks Car Care",
    "Hyderabad car modification",
    "Jubilee Hills",
    "automotive lifestyle",
    "PPF Hyderabad",
    "car recliners",
  ],
  authors: [{ name: "Rakesh Kurapati" }],
  creator: "Rakesh Kurapati",
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/icon.jpg", type: "image/jpeg" }],
    shortcut: "/icon.jpg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Rakesh Kurapati",
    title: "Rakesh Kurapati — Founder of Fasttracks Car Care",
    description:
      "Cars. Craft. Character. Founder of Fasttracks Car Care — India's biggest instant car modification studio in Jubilee Hills, Hyderabad.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rakesh Kurapati with Maserati MC20 and Lamborghini Huracán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakesh Kurapati — Founder of Fasttracks Car Care",
    description:
      "Entrepreneur · Automotive lifestyle · Founder of Fasttracks Car Care, Jubilee Hills, Hyderabad.",
    images: ["/images/hero.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rakesh Kurapati",
  jobTitle: "Founder & CEO",
  url: siteUrl,
  image: `${siteUrl}/images/hero.jpg`,
  sameAs: [
    "https://www.instagram.com/rakesh_knv/",
    "https://www.linkedin.com/in/rakeshkurapati52",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Fasttracks Car Care",
    url: "https://www.fasttrackscarcare.in/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1355/F, Road No. 45, Nandagiri Hills, Jubilee Hills",
      addressLocality: "Hyderabad",
      postalCode: "500033",
      addressCountry: "IN",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bebas.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
