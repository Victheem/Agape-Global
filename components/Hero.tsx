"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ServiceCards from "./ServiceCards";

export default function Hero() {
  return (
    <main className="bg-black text-white">
      
      {/* ===== HERO ===== */}
      <section className="pt-32 h-screen relative z-10"> {/* Add top padding to avoid navbar overlap */}
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
            <motion.h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Empowering Lives Through{" "}
              <span className="text-blue-600">Accessible Finance</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-gray-300 max-w-2xl"
            >
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

            {/* Address & Phone with transparent boxed background */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <div className="bg-white/10 border border-gray-700 rounded-xl p-4 max-w-sm">
                <div className="text-xs text-gray-300 mb-1">Address</div>
                <div className="text-gray-200 text-sm">
                  Mercy Eye Hospital Complex, Plot 15, Umar Audi Road, Fate Round About, Ilorin
                </div>
              </div>

              <div className="bg-white/10 border border-gray-700 rounded-xl p-4 max-w-xs">
                <div className="text-xs text-gray-300 mb-1">Phone</div>
                <div className="text-gray-200 text-sm">+234 813 147 3756</div>
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
                  src="/images/hero-image.jpg"
                  alt="Woman holding phone with fintech elements"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-6 bg-[#0f4b8f] text-white px-3 py-2 rounded-xl shadow"
              aria-hidden
            >
              📈 +12%
            </motion.div>

            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.6 }}
              className="absolute bottom-8 -left-6 bg-green-600 text-white px-3 py-2 rounded-xl shadow"
              aria-hidden
            >
              ₦48.2M
            </motion.div>

            <div className="absolute -bottom-10 right-8">
              <AnimatedStatRing size={120} progress={70} label="Loans" color="#F5B700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Other sections ===== */}
      {/* Who We Are, About Snapshot, Loan Categories, ServiceCards... */}
      {/* Keep your existing sections as they are */}

    </main>
  );
}

/* -------------------------
   Small helper: animated ring
------------------------- */
function AnimatedStatRing({ size = 120, progress = 60, label = "Stat", color = "#F5B700" }: { size?: number; progress?: number; label?: string; color?: string }) {
  const r = 48;
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
