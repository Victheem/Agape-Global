"use client";

import { motion } from "framer-motion";

export default function CareerBanner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Join Our Growing Team
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Be part of a mission-driven company empowering individuals and small
          businesses with accessible financial solutions.
        </p>
        <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-100 transition">
          View Open Roles
        </button>
      </motion.div>

      {/* Subtle background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-[url('/images/teamwork-bg.jpg')] bg-cover bg-center"
      ></motion.div>
    </section>
  );
}
