"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Career2() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h3 initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-yellow-400 mb-4">
          Join Our Team
        </motion.h3>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-300 mb-6">
          We’re building a values-driven team. If you’re passionate about financial inclusion and impact, apply today.
        </motion.p>
        <Link href="/career">
          <motion.button whileHover={{ scale: 1.03 }} className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">
            Apply Now
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
