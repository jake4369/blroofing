import "@styles/index.css";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

import { ModalProvider } from "@context/ModelContext";

export const metadata = {
  title: "LB Roofing",
  description:
    "With over a decade of industry experience, LB Roofing is your trusted choice in the West Midlands for top-quality roofing repairs, maintenance, and replacements. We use premium materials and advanced techniques to ensure your roof stands strong against the UK's unpredictable weather. Count on us for enduring results and friendly service at competitive prices.",
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
