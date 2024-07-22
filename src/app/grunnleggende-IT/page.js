import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";

export default async function GrunnleggendeIT() {
  const data = await getData();
  const gIT = data[3];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={gIT} />
    </main>
  );
}