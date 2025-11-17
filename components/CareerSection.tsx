"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareerSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-200 py-20 overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(234,179,8,0.1),_transparent_60%)] blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
              className="bg-yellow-400/10 p-4 rounded-full"
            >
              <Briefcase className="w-10 h-10 text-yellow-400" />
            </motion.div>
          </div>

          <h2 className="text-4xl font-bold mb-4 text-yellow-400">
            Join Our Dynamic Team
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            At <span className="text-yellow-400 font-semibold">Aiders Global (Agape) Nigeria Limited</span>,
            we believe in growth, collaboration, and excellence. Join a team
            that’s committed to financial empowerment and innovation across Nigeria.
          </p>

          <Link href="/career">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating Illustration */}
        <motion.img
          src="/images/woman 5.jpg"
          alt="Our Team"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mt-12 w-full max-w-3xl rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
}
