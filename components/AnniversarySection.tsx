"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AnniversarySection () {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-black-600 to-indigo-900 text-white py-28 overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
      
      {/* Floating Confetti */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 animate-bounce text-yellow-400 text-3xl">🎊</div>
        <div className="absolute top-40 right-20 animate-ping text-pink-400 text-3xl">🎉</div>
        <div className="absolute bottom-20 left-10 animate-spin-slow text-blue-300 text-3xl">✨</div>
        <div className="absolute top-1/2 right-1/4 animate-bounce-slow text-green-300 text-2xl">🎊</div>
      </div>

      {/* Floating Star Badge */}
      <motion.div
        initial={{ scale: 0, y: -80, opacity: 0 }}
        whileInView={{ scale: 1.2, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 1.5 }}
        className="absolute top-6 left-10 z-20"
      >
        <div className="relative flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="relative bg-yellow-400 text-black font-extrabold text-5xl w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-yellow-200"
          >
            ⭐
            <span className="text-sm mt-1 font-semibold tracking-wider">5 YEARS</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Balloon */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute right-20 top-10"
      >
        <span className="text-red-400 text-5xl">🎈</span>
      </motion.div>

      {/* Text Section */}
      <div className="relative z-10 text-center md:text-left max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold leading-snug mb-4"
        >
          Celebrating 5 Years of <br />
          <span className="text-blue-400">Impact, Growth & Transformation</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-200 mb-6"
        >
          We’ve come a long way together — empowering dreams, inspiring change,
          and driving financial inclusion across communities.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link
            href="/anniversary"
            className="bg-blue-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition"
          >
            See Our Journey
          </Link>
        </motion.div>
      </div>

      {/* Company Staff Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative mt-10 md:mt-0"
      >
        <Image
          src="/images/ballon3.png"
          alt="Company Staff Celebrating"
          width={400}
          height={400}
          className="rounded-2xl shadow-lg border-none"
        />
      </motion.div>
    </section>
  );
};

