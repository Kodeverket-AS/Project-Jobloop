
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";
import CourseSummary from "../../../components/CourseSummary";

import LeaderSection from "../../../components/LeaderSection";


export default async function LearnWell() {
  const data = await getData();
  const learnWell = data.tiltak[0];
  return (
    <main className="flex flex-col items-center gap-16 w-full max-w-[1536px] mx-auto my-16">
      <HeroSub content={learnWell} />
      <CourseSummary content={learnWell} course={"LearnWell"} />
      <LeaderSection 
        leaders={[
          {
            name: "Beate Johnsen",
            position: "Kursleder, LearnWell",
            image: "/Beate.jpg",
            description: [
              {
                _type: "block",
                children: [
                  {
                    _type: "span",
                    text: "Beate Johnsen\nbeate@jobloop.no\n+47 987 65 432"
                  }
                ]
              }
            ]
          },
          {
            name: "Stian Taule",
            position: "Faglig Leder",
            image: "/stian.webp",
            description: [
              {
                _type: "block",
                children: [
                  {
                    _type: "span",
                    text: "Stian Taule\nstian.t@jobloop.no\n41686778"
                  }
                ]
              }
            ]
          }
        ]} 
      />
    </main>
  );
}
