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
        <meta property="og:image" content="/assets/hero/hero-img-tablet.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://lb-roofing.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LB Roofing" />
        <meta property="og:locale" content="en_GB" />
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
      </body>
    </html>
  );
}
