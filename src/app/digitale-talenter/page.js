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

export default async function DigitaleTalenter() {
    const data = await getData();
    const digTal = data.tiltak[2];
    return (
        <main className='flex flex-col items-center justify-between'>
            <HeroSub content={digTal} />

            <CourseSummary content={digTal} course={"Digitale Talenter"} />
            <div className='w-full max-w-4xl px-4 mt-10 mb-20'>
                <div className='relative rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm aspect-video animate-fade-in ring-1 ring-black/10'>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className='w-full h-full object-cover'
                    >
                        <source
                            src='/videos/Digitale talenter.mp4'
                            type='video/mp4'
                        />
                        Nettleseren din støtter ikke videoavspilling.
                    </video>
                </div>
            </div>
            <Curriculum content={digTal} course={"Digitale Talenter"} />
            {/*<CourseUsefullness content={digTal} course={"Digitale Talenter"} />*/}
            <LeaderSection
                content={digTal}
                leader={"Frode Moldestad Bøe"}
                position={"Kursleder"}
            />
            {/*<ForCompanies content={digTal} />*/}
            {/*<ForSchool content={digTal} situation={"samarbeidspartner"} />*/}
            {/*<Places content={digTal} />*/}
        </main>
    );
}
