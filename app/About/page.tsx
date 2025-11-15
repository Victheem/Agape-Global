import AboutBanner from "./components/AboutBanner";
import AboutSection from "./components/AboutSection";
import VisionMission from "./components/VisionMission";
import FAQSection from "./components/FAQSection";
import CareerSection from "./components/CareerSection";
// import WhyChooseUs from "../components/WhyChooseUs";
import AboutServices from "./components/AboutServices";


export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <AboutSection />
      <VisionMission />
       <AboutServices />
      <FAQSection />
      <CareerSection />
      {/* <WhyChooseUs /> */}
     
    </>
  );
}
