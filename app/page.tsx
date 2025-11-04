import CallToAction from "@/components/CallToAction";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TeamCards from "@/components/TeamCards";
import WhoWeAre from "@/components/WhoWeAre";
import ProjectCards from "@/components/ProjectCards";
import AnniversarySection from "@/components/AnniversarySection";


export default function Home () {
    return <main className="min-h-screen">
        <Navbar />
        <Hero />
        <CoreValues />
        <AnniversarySection />
        <CallToAction />
        <TeamCards />
        <ProjectCards />
        


    </main>
}