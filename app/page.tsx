import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ProjectCards from "@/components/ProjectCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutCompany from "@/components/AboutCompany";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutCompany />
      <AboutSection />
      <ServiceCards />
      <WhyChooseUs />
      <ProjectCards />
    </main>
  );
}
