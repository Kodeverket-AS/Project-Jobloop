import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/HeroSub";

export default async function IndividuellAMO() {
  const data = await getData();
  const amo = data.tiltak[5];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={amo} />
    </main>
  );
}
