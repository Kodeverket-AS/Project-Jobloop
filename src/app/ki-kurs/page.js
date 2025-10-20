import HeroSection from "../../../components/ki/HeroSection";
import DescriptionSection from "../../../components/ki/DescriptionSection";
import CourseInfoCards from "../../../components/ki/CourseInfoCards";
import CTASection from "../../../components/ki/CTASection";
import BottomImageSection from "../../../components/ki/BottomImageSection";

export default function KiKurs() {
  return (
    <main className="min-h-screen bg-jobloop-primary-green/20 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <HeroSection />
        <DescriptionSection />
        <CourseInfoCards />
        <CTASection />
        <BottomImageSection />
      </div>
    </main>
  );
}
