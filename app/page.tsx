import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
// import ServiceCards from "@/components/ServiceCards"
import ProjectCards from "@/components/ProjectCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToAction from "@/components/CallToAction";
import AnniversarySection from "@/components/AnniversarySection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutSection />
      {/* <ServiceCards /> */}
      <WhyChooseUs />
      
      <AnniversarySection />
      <CallToAction />

      <ProjectCards />
    </main>
  );
}
