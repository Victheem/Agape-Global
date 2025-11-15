"use client";

import { motion } from "framer-motion";

export default function AboutBanner() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Floating shapes for visual motion */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-blue-300/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Text Section */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          About <span className="text-yellow-400">Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg max-w-2xl mx-auto"
        >
          Discover who we are, what drives us, and the vision that inspires
          every innovation we create.
        </motion.p>
      </div>
    </section>
  );
}
