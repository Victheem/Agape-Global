"use client";

import { motion } from "framer-motion";
import ServiceCards from "@/components/ServiceCards";

export default function AboutServices() {
  return (
    <section className="w-full py-20 bg-gray-950 text-gray-200 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 text-yellow-400"
        >
          Our Core Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          We provide flexible, reliable, and innovative financial solutions that 
          empower individuals and businesses to achieve their dreams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ServiceCards />
        </motion.div>
      </div>
    </section>
  );
}
