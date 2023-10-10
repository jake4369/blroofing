import "@styles/index.css";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

import { ModalProvider } from "@context/ModelContext";

export const metadata = {
  title: "LB Roofing",
  description:
    "Trust LB Roofing: Expert West Midlands roofing repairs, maintenance, replacements. Quality materials, unbeatable service, competitive prices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
