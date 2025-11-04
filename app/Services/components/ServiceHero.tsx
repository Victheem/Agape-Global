"use client";
import { motion } from "framer-motion";

export default function ServiceHero() {
  return (
    <section className="relative bg-gray-950 text-gray-200 py-24 text-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-yellow-400 mb-4"
      >
        Our Financial Solutions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-2xl mx-auto"
      >
        Explore flexible and reliable loan options designed to empower you —
        whether you’re a student, worker, or entrepreneur.
      </motion.p>
    </section>
  );
}
