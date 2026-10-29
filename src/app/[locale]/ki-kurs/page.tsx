import BottomImageSection from "@/components/feature/ki/BottomImageSection";
import CourseInfoCards from "@/components/feature/ki/CourseInfoCards";
import CTASection from "@/components/feature/ki/CTASection";
import DescriptionSection from "@/components/feature/ki/DescriptionSection";
import HeroSection from "@/components/feature/ki/HeroSection";

export default function KiKurs() {
  return (
    <main
      id='main'
      className='min-h-screen bg-jobloop-primary-green/20'
    >
      <article
        className='max-w-[1536px] px-4 py-16 flex flex-col items-center gap-16 w-full mx-auto'
        aria-labelledby='ki-intro-title'
      >
        <HeroSection />
        <DescriptionSection />
        <CourseInfoCards />
        <CTASection />
        <BottomImageSection />
      </article>
    </main>
  );
}
