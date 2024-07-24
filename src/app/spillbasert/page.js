import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/HeroSub";

export default async function Spillbasert() {
  const data = await getData();
  const spillbasert = data.tiltak[4];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={spillbasert} />
    </main>
  );
}
