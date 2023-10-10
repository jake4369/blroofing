import "@styles/index.css";

import Head from "next/head";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

import { ModalProvider } from "@context/ModelContext";

export const metadata = {
  title: "LB Roofing - West Midlands",
  description:
    "Trust LB Roofing: Expert West Midlands roofing repairs, maintenance, replacements. Quality materials, unbeatable service, competitive prices.",
  canonicalUrl: "https://lb-roofing.vercel.app/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>LB Roofing - West Midlands</title>
        <link
          rel="canonical"
          href="https://lb-roofing.vercel.app/"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:title" content="LB Roofing - West Midlands" />
        <meta
          property="og:description"
          content="Trust LB Roofing: Expert West Midlands roofing repairs, maintenance, replacements. Quality materials, unbeatable service, competitive prices."
        />
        <meta property="og:image" content="/hero.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://lb-roofing.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LB Roofing" />
        <meta property="og:locale" content="en_GB" />
        <meta property="twitter:image" content="/hero.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="LB Roofing - West Midlands" />
        <meta
          property="twitter:description"
          content="Trust LB Roofing: Expert West Midlands roofing repairs, maintenance, replacements. Quality materials, unbeatable service, competitive prices."
        ></meta>
        <meta
          property="og:article:author"
          content="https://lb-roofing.vercel.app/"
        />
      </Head>
      <body>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>

        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "name": "LB Roofing",
            "description": "Expert roofing repairs, maintenance, and replacements in the West Midlands.",
            "url": "https://lb-roofing.vercel.app/",
            "logo": "https://lb-roofing.vercel.app/assets/services/house-icon.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "West Midlands",
              "postalCode": "12345",
              "addressCountry": "UK"
            },
            "telephone": "+123456789",
            "openingHours": "Mo-Fr 08:00-17:00",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.12345",
              "longitude": "-0.12345"
            }
          }
        `}
        </script>
      </body>
    </html>
  );
}
