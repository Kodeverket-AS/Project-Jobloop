"use client";

import JobloopPhoto from "../public/JobloopPhoto.png";
import { IntroSection } from "./IntroCardComponent";

export default function LandingIntro() {
  return (
    <div>
      <IntroSection
        title={"Hvem er Jobloop?"}
        text={
          "JobLoop har oppnådd en imponerende suksessrate siden 2014, som er bekreftet av FAFOs forskning. Vi er stolte av å kunne tilby en plattform som hjelper diverse grupper med å finne arbeid og tilbyr skreddersydd yrkesopplæring."
        }
        image={JobloopPhoto}
        alt={"Jobloop photo"}
        path={"/om-oss"}
        isButton={true}
      />
    </div>
  );
}
