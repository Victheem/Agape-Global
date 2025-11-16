import AboutBanner from "@/app/About/components/AboutBanner";
import AboutSection from "@/app/About/components/AboutSection";
import VisionMission from "@/app/About/components/VisionMission";
import FAQSection from "@/app/About/components/FAQSection";
import CareerSection from "@/app/About/components/CareerSection";
import AboutServices from "@/app/About/components/AboutServices";


export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <AboutSection />
      <VisionMission />
      <AboutServices />
      <FAQSection />
      <CareerSection />
     
    </>
  );
}
