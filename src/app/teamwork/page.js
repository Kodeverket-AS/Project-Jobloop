import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";

export default async function Teamwork() {
  const data = await getData();
  const teamwork = data.tiltak[6];
  console.log(teamwork)
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={teamwork} />
    </main>
  );
}