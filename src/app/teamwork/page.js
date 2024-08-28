import Image from "next/image";
import { getData } from "../../../lib/GetData";
// import HeroSub from "../../../components/herosub";
import HeroSub from "../../../components/herosubTeamwork";
import CourseSummary from "../../../components/CourseSummary";
import Curriculum from "../../../components/Curriculum";
import CourseUsefullness from "../../../components/CourseUsefulness";
import LeaderSection from "../../../components/LeaderSection";
import ForCompanies from "../../../components/ForCompanies";
import ForSchool from "../../../components/ForSchool";
import Places from "../../../components/Places";
import { ExternalLinkButton } from "../../../components/Buttons";
export default async function Teamwork() {
    const data = await getData();
    const teamwork = data.tiltak[6];
    console.log(teamwork);
    return (
        <main className='flex flex-col items-center justify-between'>
            <HeroSub content={teamwork} />

            {/*<CourseSummary content={teamwork} course={"Teamwork"} />*/}
            {/*<Curriculum content={teamwork} course={"Teamwork"} />*/}
            {/*<CourseUsefullness content={teamwork} course={"Teamwork"} />*/}
            {/*<LeaderSection content={teamwork} leader={"Karl Håkon Rødland"} position={"Leder"} />*/}
            {/*<ForCompanies content={teamwork} />*/}
            {/*<ForSchool content={teamwork} situation={"samarbeidspartner"} />*/}
            {/*<Places content={teamwork} />*/}
        </main>
    );
}
