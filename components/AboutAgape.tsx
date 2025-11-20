"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutAgape () {
  useEffect(() => {
    // safety no-op for SSR + framer-motion minor quirks
    return () => {};
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-slate-900 text-white">
        {/* ===== Banner ===== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#061226] to-[#071426]">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-36 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-sm text-sky-300 font-medium">About Us</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Aiders Global (Agape) Nigeria Limited
              </h1>

              <p className="text-slate-300 max-w-2xl">
                Aiders Global (Agape) Nigeria Limited is a microfinance institution dedicated to offering
                financial services to the low-income population. We bridge the financial inclusion gap by
                providing microloans and tailored financial solutions to underserved individuals and small businesses.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Link href="/services" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    className="bg-sky-500 hover:bg-sky-600 text-slate-900 font-semibold px-5 py-3 rounded-2xl"
                  >
                    Our Services
                  </motion.button>
                </Link>

                <Link href="/apply" className="inline-block">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    className="bg-transparent border border-slate-700 px-5 py-3 rounded-2xl"
                  >
                    Apply Now
                  </motion.button>
                </Link>
              </div>

              <div className="mt-6 text-sm text-slate-400 space-y-2">
                <div>
                  <span className="font-semibold text-slate-200">Address:</span>{" "}
                  Mercy Eye Hospital Complex, Plot 15, Umar Audi Road, Fate Round About, Ilorin
                </div>
                <div>
                  <span className="font-semibold text-slate-200">Phone:</span> +234 813 147 3756
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            >
              <Image
                src="/images/about-hero.jpg"
                alt="Agape team and fintech"
                fill
                className="object-cover"
                priority
              />

              {/* floating anniversary badge example (subtle) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm border border-slate-700 px-3 py-2 rounded-full text-xs"
              >
                5 Years — Trust & Impact
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== About Details & Impact ===== */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-sky-400">Towards Poverty Alleviation</h2>
              <p className="text-slate-300 mb-4">
                Founded in May 2020, AGAPE was established to provide microloans to individuals and small businesses,
                empowering them to purchase goods, access services, and grow their enterprises.
              </p>

              <p className="text-slate-300 mb-6">
                By focusing on underserved markets — especially the FMCG sector — AGAPE helps small businesses scale,
                creates jobs, and stimulates local economic activity.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-5 bg-slate-800/40 rounded-2xl border border-slate-700">
                  <h4 className="font-semibold text-sky-300">Commitment to Excellence</h4>
                  <p className="text-slate-300 text-sm mt-2">
                    We maintain the highest standards of service excellence — combining data-driven underwriting with human support.
                  </p>
                </div>

                <div className="p-5 bg-slate-800/40 rounded-2xl border border-slate-700">
                  <h4 className="font-semibold text-sky-300">Our Impact</h4>
                  <p className="text-slate-300 text-sm mt-2">
                    Providing financial services to underserved communities increases financial inclusion and supports sustainable growth.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="rounded-2xl overflow-hidden border border-slate-800 h-64 relative">
                <Image src="/images/team-collage.jpg" alt="Team" fill className="object-cover" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800/40 rounded-lg border border-slate-700 text-sm">
                  <div className="text-xs text-sky-300 font-semibold">Founded</div>
                  <div className="font-medium mt-1">May 2020</div>
                </div>
                <div className="p-4 bg-slate-800/40 rounded-lg border border-slate-700 text-sm">
                  <div className="text-xs text-sky-300 font-semibold">Primary Focus</div>
                  <div className="font-medium mt-1">FMCG & Micro-Businesses</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== Mission / Vision / Goals ===== */}
        <section className="py-12 bg-slate-900/60 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-sky-400">Mission</h3>
              <p className="text-slate-300">
                To provide accessible, reliable, and personalized microloan services that support the financial needs of
                underserved individuals and small businesses.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-sky-400">Vision</h3>
              <p className="text-slate-300">
                To be a leading microloan provider, empowering individuals and small businesses to achieve economic independence
                through accessible and innovative financial solutions.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-sky-400">Goals</h3>
              <ol className="text-slate-300 list-decimal list-inside space-y-2">
                <li>Expand financial access across underserved communities.</li>
                <li>Support business growth with tailored solutions.</li>
                <li>Ensure operational excellence and customer-first experiences.</li>
                <li>Maintain financial stability and sustainability.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* ===== Core Values RIGETEC ===== */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-sky-400 mb-6">Our Core Values — RIGETEC</h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { t: "Reliability", d: "Delivering dependable, timely services." },
                { t: "Integrity", d: "Honesty and transparency in all dealings." },
                { t: "Genuine", d: "Real care for clients' outcomes." },
                { t: "Empathy", d: "Understanding client needs and circumstances." },
                { t: "Teamwork", d: "Collaborative culture to deliver results." },
                { t: "Excellence", d: "High standards in every process." },
                { t: "Customer Focused", d: "Designing services around clients." },
              ].map((v) => (
                <motion.div
                  key={v.t}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="p-5 bg-slate-800/40 rounded-2xl border border-slate-700"
                >
                  <div className="text-sky-300 font-semibold">{v.t}</div>
                  <div className="text-slate-300 text-sm mt-2">{v.d}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Services Overview ===== */}
        <section className="py-16 bg-slate-900/40 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-sky-400 mb-6">Our Services</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700"
              >
                <h4 className="font-semibold mb-2">Micro Lending Loans</h4>
                <p className="text-slate-300 text-sm mb-2">
                  Short-Term Loans for working capital and urgent needs; Long-Term Loans for expansion and investment.
                </p>
                <ul className="text-slate-300 text-sm list-disc list-inside">
                  <li>Short-Term Loans</li>
                  <li>Long-Term Loans</li>
                  <li>Education Loans</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700"
              >
                <h4 className="font-semibold mb-2">Tailored Financial Solutions</h4>
                <p className="text-slate-300 text-sm">
                  Customized loan packages and advisory support for micro and small businesses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700"
              >
                <h4 className="font-semibold mb-2">Education Loan</h4>
                <p className="text-slate-300 text-sm">
                  Loans that empower students to pursue academic and career goals with flexible repayment options.
                </p>
              </motion.div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="inline-block">
                <motion.button whileHover={{ scale: 1.03 }} className="bg-sky-500 px-5 py-3 rounded-2xl text-slate-900 font-semibold">
                  See All Products
                </motion.button>
              </Link>

              <Link href="/apply" className="inline-block">
                <motion.button whileHover={{ scale: 1.03 }} className="bg-transparent border border-slate-700 px-5 py-3 rounded-2xl">
                  Apply Now
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CTA - Contact / Quick Call ===== */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#031428] to-[#051726] border border-slate-800 rounded-2xl p-6">
            <div>
              <h4 className="text-lg font-bold">Need to speak to an agent?</h4>
              <p className="text-slate-300 text-sm">Our team is ready to help you find the right loan product.</p>
            </div>

            <div className="flex items-center gap-6">
              <a href="tel:+2348131473756" className="text-sky-400 font-semibold text-lg">+234 813 147 3756</a>
              <a href="/contact" className="text-sm bg-transparent border border-slate-700 px-4 py-2 rounded-lg">Contact Us</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* -------------------------
   Animated stat ring helper
------------------------- */
function AnimatedStatRing({ size = 120, progress = 60, label = "Stat", color = "#F5B700" }: {
  size?: number;
  progress?: number;
  label?: string;
  color?: string;
}) {
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
        transition={{ duration: 1.2 }}
      />
      <text x="64" y="70" textAnchor="middle" fill="#fff" fontSize="12" fontWeight={700}>
        {label}
      </text>
    </svg>
  );
}