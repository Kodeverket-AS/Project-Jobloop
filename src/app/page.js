import Image from "next/image";
import LandingHero from "../../components/LandingHero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <LandingHero />      
      Velkommen til jobloop.no, denne siden er under konstruksjon.
    </main>
  );
}