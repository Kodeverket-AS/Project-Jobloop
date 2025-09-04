//import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "../../components/navigation/Footer";
import { ScrollToTopButton } from "../../components/Buttons";
import Navigation from "../../components/navigation/Navigation";


//const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jobloop: Inkluderende arbeidspraksis og effektiv jobbmatching",
  description: "Få tilgang til inkluderende arbeidsmuligheter og skreddersydd yrkesopplæring",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no-nb" className={roboto.className}>
      <body className="flex flex-col max-w-[1536px] mx-auto px-1 md:px-0">
        <Navigation />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
