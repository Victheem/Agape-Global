"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Anniversary = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 text-center text-white">
      {/* Floating golden number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
      >
        <motion.span
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="text-[25rem] font-extrabold text-yellow-500/20 select-none"
        >
          5
        </motion.span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
        >
          Celebrating 5 Years of Empowering Lives
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg mb-8"
        >
          Since 2020, Agape Global has been driving financial inclusion — supporting
          dreams, building businesses, and changing lives through accessible lending.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/journey">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition">
              See Our Journey
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Subtle golden shimmer overlay */}
      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.2),transparent_70%)]"
      />
    </section>
  );
};

export default AnniversarySection;
