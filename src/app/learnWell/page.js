import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";
import CourseSummary from "../../../components/CourseSummary";

export default async function LearnWell() {
  const data = await getData();
  const learnWell = data.tiltak[0];
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0">
      <HeroSub content={learnWell} />
      <CourseSummary content={learnWell} course={"LearnWell"} />
    </main>
  );
}
