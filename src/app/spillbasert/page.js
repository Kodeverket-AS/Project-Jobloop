import Image from "next/image";
import { getData } from "../../../lib/GetData";
import HeroSub from "../../../components/herosub";
import CourseSummary from "../../../components/CourseSummary";
import Curriculum from "../../../components/Curriculum";
import CourseUsefullness from "../../../components/CourseUsefulness";
import LeaderSection from "../../../components/LeaderSection";
import ForCompanies from "../../../components/ForCompanies";
import ForSchool from "../../../components/ForSchool";
import Places from "../../../components/Places";

export default async function Spillbasert() {
    const data = await getData();
    const spillbasert = data.tiltak[4];
    return (
        <main className='flex flex-col my-16 items-center gap-16 w-full max-w-[1536px] mx-auto'>
            <HeroSub content={spillbasert} />
            <CourseSummary content={spillbasert} course={"Spillbasert"} />
            <Curriculum content={spillbasert} course={"Spillbasert"} />
            <LeaderSection leaders={[]} />
        </main>
    );
}
