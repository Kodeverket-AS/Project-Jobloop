import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";

export default async function Gamify() {
  const data = await getData();
  const gamify = data.tiltak[1];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={gamify} />
    </main>
  );
}
