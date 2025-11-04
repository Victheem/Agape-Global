// app/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Clock, Building2, LineChart } from "lucide-react";

import Footer from "@/components/Footer";
import ServiceCards from "./ServiceCards";

/**
 * Home (step 1 of N) - Hero, Who We Are, About Snapshot
 * - Place images in public/images/: hero-woman.jpg, who-we-are.jpg, fintech-dashboard.jpg
 * - Requires: framer-motion, tailwindcss
 */

export default function Home () {
  useEffect(() => {
    // small safety for servers where motion might misbehave if SSR/no-window
    // (not strictly necessary in most Next projects)
    return () => {};
  }, []);

  return (
    <>
      

      <main className="bg-black text-white">


        {/* ===== HERO ===== */}
        <section className="h-screen relative z-10 py-20 ">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: headline + copy + CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut"}}
              className="space-y-6"
            >
              <h4 className="text-sm text-[#F5B700] font-semibold mb-2">-Welcome</h4>
              <h1 className="text-4xl text-blue-600 font-bold mb-4">Aiders Global (AGAPE)</h1>
             
              <motion.h1 
                className="text-4xl md:text-5xl font-extrabold leading-tight">
                Empowering Lives Through{" "}
                <span className="text-blue-600">Accessible Finance</span>
              </motion.h1>

              <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-gray-300 max-w-2xl">
                Agape Global (Aiders) makes microloans simple, fast and human — helping students,
                wage earners and small businesses access capital to grow and thrive.
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    className="bg-transparent border border-gray-700 px-5 py-3 rounded-2xl text-white"
                    aria-label="Learn more about Agape Global"
                  >
                    Learn More
                  </motion.button>
                </Link>

                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    className="bg-blue-600 text-black px-5 py-3 rounded-2xl font-semibold"
                    aria-label="View our services"
                  >
                    Our Services
                  </motion.button>
                </Link>
              </div>

              <div className="flex gap-6 text-sm text-gray-400 mt-6">
                <div>
                  <div className="text-xs text-gray-300">Address</div>
                  <div className="max-w-xs">Mercy Eye Hospital Complex, Plot 15, Umar Audi Road, Fate Round About, Ilorin</div>
                </div>

                <div>
                  <div className="text-xs text-gray-300">Phone</div>
                  <div>+234 813 147 3756</div>
                </div>
              </div>
            </motion.div>

            {/* Right: image with floating fintech badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gradient-to-br from-[#041029] to-[#071426]">
                <div className="relative h-96 w-full">
                  <Image
                    src="/images/woman 2.jpg"
                    alt="Woman holding phone with fintech elements"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* floating stat badge top-right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-6 bg-[#0f4b8f] text-white px-3 py-2 rounded-xl shadow"
                aria-hidden
              >
                📈 +12%
              </motion.div>

              {/* floating stat badge bottom-left */}
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.6 }}
                className="absolute bottom-8 -left-6 bg-green-600 text-white px-3 py-2 rounded-xl shadow"
                aria-hidden
              >
                ₦48.2M
              </motion.div>

              {/* subtle stat ring overlaid */}
              <div className="absolute -bottom-10 right-8">
                <AnimatedStatRing size={120} progress={70} label="Loans" color="#F5B700" />
              </div>
            </motion.div>
          </div>
        </section>

        
        
        {/* ===== WHO WE ARE ===== */}
        <section className="py-16 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <motion.div
               initial={{ y: -20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
              <h4 className="text-sm text-[#F5B700] font-semibold mb-2">Who we are</h4>
              <h2 className="text-3xl font-bold mb-4">Towards Poverty Alleviation</h2>

              <p className="text-gray-300 mb-4">
                Founded in <strong>May 2020</strong>, Aiders Global (Agape) Nigeria Limited (AGAPE) was established with the mission to provide microloans
                to individuals and small businesses — enabling them to purchase goods, access services, and support everyday enterprise growth.
              </p>

              <p className="text-gray-300 mb-4">
                Our focus is the essential needs sector, especially Fast-Moving Consumer Goods (FMCG), where even small capital can create big impact.
              </p>

              <Link href="/about">
                <motion.button whileHover={{ scale: 1.02 }} className="mt-2 bg-transparent border border-gray-700 px-4 py-2 rounded-xl">
                  Discover More
                </motion.button>
              </Link>
            </motion.div>

            {/* Right image */}
            <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-800 h-72 md:h-96">
                <Image src="/images/woman 6.jpg" alt="Who we are image" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== ABOUT SNAPSHOT (image left, content right) ===== */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: fintech dashboard image */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 h-72 md:h-96">
                <Image src="/images/dasborad black.jpg" alt="Fintech dashboard" fill className="object-cover" />
              </div>{/* ===== Floating Statistic Bars ===== */}
            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
              className="absolute -top-6 left-6 bg-blue-600/90 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg shadow-blue-500/40 backdrop-blur-sm"
            >
              +12.4% Growth ↑
            </motion.div>

            <motion.div
              animate={{ x: [0, 10, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
              className="absolute bottom-6 -right-6 bg-green-600/90 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg shadow-green-500/40 backdrop-blur-sm"
            >
              ₦48.2M Transactions
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatType: "mirror" }}
              className="absolute top-1/2 -left-10 bg-purple-600/90 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg shadow-purple-500/40 backdrop-blur-sm"
            >
              98.7% Uptime
            </motion.div>


            </motion.div>

            
          
        

            {/* Right: content (pulling tone from About page) */}
            
            
            
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className=""
            >
              <h4 className="text-sm text-[#F5B700] font-semibold mb-2">About AGAPE</h4>
              <h2 className="text-3xl font-bold mb-4">Driving Financial Inclusion Across Nigeria</h2>

              <p className="text-gray-300 mb-4">
                AGAPE combines local market insight with fintech innovation to deliver microloans that are fast, transparent and tailored.
                We use data-driven underwriting and human support to ensure loans reach those who need them.
              </p>

              <p className="text-gray-300 mb-6">
                Whether you need to fund education, bridge payroll gaps, buy an asset, or grow a small business — we design products that help you move forward.
              </p>

              <div className="flex gap-4">
                <Link href="/apply">
                  <motion.button whileHover={{ scale: 1.03 }} className="bg-blue-600 text-black rounded-2xl px-5 py-3 font-semibold">
                    Apply Now
                  </motion.button>
                </Link>

                <Link href="/services">
                  <motion.button whileHover={{ scale: 1.03 }} className="bg-transparent border border-gray-700 px-5 py-3 rounded-2xl">
                    View Products
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>



{/* SHORT SECTION */}

{/* ===== LOAN CATEGORIES (Short-Term / Long-Term / Tailored) ===== */}
<section className="py-20 border-t border-gray-800 bg-[#0A0A0A]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl font-bold mb-4"
    >
      Smart Loan Categories
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-gray-400 max-w-2xl mx-auto mb-12"
    >
      Whether you need quick capital, long-term support, or customized financial help —
      AGAPE has a product designed to fit your journey.
    </motion.p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1: Short-Term Loans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#F5B700]/20 text-[#F5B700] p-3 rounded-full">
            💸
          </div>
          <h3 className="text-xl font-semibold">Short-Term Loans</h3>
        </div>
        <p className="text-gray-400">
          Perfect for individuals and businesses needing quick, short-duration funding to
          handle urgent expenses or bridge temporary gaps.
        </p>
      </motion.div>

      {/* Card 2: Long-Term Loans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#0f4b8f]/20 text-[#0f4b8f] p-3 rounded-full">
            🏦
          </div>
          <h3 className="text-xl font-semibold">Long-Term Loans</h3>
        </div>
        <p className="text-gray-400">
          Ideal for larger projects or business growth with flexible repayment plans that
          make expansion achievable and sustainable.
        </p>
      </motion.div>

      {/* Card 3: Tailored Financial Solutions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-600/20 text-green-600 p-3 rounded-full">
            📊
          </div>
          <h3 className="text-xl font-semibold">Tailored Financial Solutions</h3>
        </div>
        <p className="text-gray-400">
          Custom loan packages designed to meet unique financial needs, whether personal
          or corporate — crafted for your exact situation.
        </p>
      </motion.div>
    </div>
  </div>
</section>

<ServiceCards />
      </main>
    
         </>

    

      
  );
}

/* -------------------------
   Small helper: animated ring
   ------------------------- */
function AnimatedStatRing({ size = 120, progress = 60, label = "Stat", color = "#F5B700" }: { size?: number; progress?: number; label?: string; color?: string }) {
  // stroke calculations for circle radius  (use r = size/2 - padding)
  const r = 48; // chosen radius for viewbox 0..128
  const circumference = 2 * Math.PI * r;
  const dash = (1 - progress / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox="0 0 128 128" aria-hidden>
      <circle cx="64" cy="64" r={r} stroke="#222" strokeWidth="8" fill="none" />
      <motion.circle
        cx="64"
        cy="64"
        r={r}
        stroke={color}
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={dash}
        strokeLinecap="round"
        fill="none"
        animate={{ strokeDashoffset: [circumference, dash] }}
        transition={{ duration: 1.4 }}
      />
      <text x="64" y="70" textAnchor="middle" fill="#fff" fontSize="12" fontWeight={700}>
        {label}
      </text>
    </svg>
  );
}
