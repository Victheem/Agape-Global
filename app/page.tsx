"use client";

import Hero from "@/components/Hero";
import Abouts from "@/components/Abouts";
import Wcu from "@/components/Wcu";
import AnniversarySection from "@/components/AnniversarySection";
import CallToAction from "@/components/CallToAction";
import ProjectCards from "@/components/ProjectCards";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Abouts />
      <Wcu />
      <AnniversarySection />
      <CallToAction />
      <ProjectCards />
    </main>
  );
}


