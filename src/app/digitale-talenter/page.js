import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";

export default async function DigitaleTalenter() {
  const data = await getData();
  const digTal = data[2];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={digTal} />
    </main>
  );
}
