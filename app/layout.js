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
        <title>LB Roofing</title>
        <link
          rel="canonical"
          href="https://lb-roofing.vercel.app/"
          key="canonical"
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
