
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";
import CourseSummary from "../../../components/CourseSummary";

import LeaderSection from "../../../components/LeaderSection";


export default async function LearnWell() {
  const data = await getData();
  const learnWell = data.tiltak[0];
  return (
    <main className="flex flex-col items-center gap-12 w-full max-w-[1536px] mx-auto">
      <HeroSub content={learnWell} />
      <CourseSummary content={learnWell} course={"LearnWell"} />
      <LeaderSection content={learnWell} leader={"Beate Johnsen & Tom Mæland"} position={"Kursleder"} />
    </main>
  );
}
