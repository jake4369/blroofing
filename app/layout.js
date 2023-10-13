import "@styles/index.css";

import Head from "next/head";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

import { ModalProvider } from "@context/ModelContext";

const schema = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  name: "LB Roofing",
  description:
    "Expert roofing and guttering repairs, maintenance, and replacements in the West Midlands.",
  url: "http://www.lbroofer.co.uk/",
  logo: "http://www.lbroofer.co.uk/assets/services/house-icon.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Old Fallings Lane",
    addressLocality: "West Midlands",
    postalCode: "WV108BN",
    addressCountry: "UK",
  },
  telephone: "+447946509599",
  openingHours: "Mo-Fr 08:00-17:00",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "52.4751",
    longitude: "1.8298",
  },
};

export const metadata = {
  title: "LB Roofing",
  description:
    "Trust LB Roofing: Expert West Midlands roofing and guttering repairs, maintenance, replacements. Quality materials, unbeatable service, competitive prices.",
  canonicalUrl: "http://www.lbroofer.co.uk/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>LB Roofing</title>
        <link
          rel="canonical"
          href="http://www.lbroofer.co.uk/"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <meta property="og:title" content="LB Roofing" />
        <meta
          property="og:description"
          content="Trust LB Roofing: Expert West Midlands roofing and guttering repairs, maintenance, replacements. Quality materials, unbeatable service, competitive prices."
        />
        <meta property="og:image" content="/hero.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="http://www.lbroofer.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LB Roofing" />
        <meta property="og:locale" content="en_GB" />
        <meta property="twitter:image" content="/hero.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="LB Roofing" />
        <meta
          property="twitter:description"
          content="Trust LB Roofing: Expert West Midlands roofing and guttering repairs, maintenance, replacements. Quality materials, unbeatable service, competitive prices."
        ></meta>
        <meta
          property="og:article:author"
          content="http://www.lbroofer.co.uk/"
        />
      </Head>

      <body>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
