import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/Herosub";

export default async function Loop() {
  const data = await getData();
  const loop = data.tiltak[7];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={loop} />
    </main>
  );
}
