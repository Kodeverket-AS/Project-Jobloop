import HeroSection from "../../../components/ki/HeroSection";
import DescriptionSection from "../../../components/ki/DescriptionSection";
import CourseInfoCards from "../../../components/ki/CourseInfoCards";
import CTASection from "../../../components/ki/CTASection";
import BottomImageSection from "../../../components/ki/BottomImageSection";

export default function KiKurs() {
  return (
    <div className="min-h-screen bg-jobloop-primary-green/20">
      <main className="max-w-[1536px] px-4 py-16 flex flex-col items-center gap-16 w-full mx-auto">
        <HeroSection />
        <DescriptionSection />
        <CourseInfoCards />
        <CTASection />
        <BottomImageSection />
      </main>
    </div>
  );
}
