"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 py-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-6 md:mb-0"
        >
          <h2 className="text-3xl font-bold mb-2">
            Need to Speak with Our Agent?
          </h2>
          <p className="text-gray-200 max-w-md">
            Our dedicated support team is available to help you with your loan
            applications, eligibility checks, or general financial guidance.
          </p>
        </motion.div>

        {/* Center phone icon with glowing animation */}
        <div className="relative flex items-center justify-center">
          {/* Outer pulse rings */}
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute w-20 h-20 rounded-full bg-indigo-400 opacity-30"
          ></motion.span>
          <motion.span
            animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="absolute w-28 h-28 rounded-full bg-indigo-500 opacity-20"
          ></motion.span>

          {/* Actual icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 8 }}
            className="relative bg-white text-indigo-700 p-5 rounded-full shadow-2xl border-4 border-indigo-500 hover:scale-110 transition-transform duration-300"
          >
            <PhoneCall className="w-10 h-10" />
          </motion.div>
        </div>

        {/* Right phone number */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-right mt-6 md:mt-0"
        >
          <p className="text-sm text-gray-300">Call Us Anytime</p>
          <a
            href="tel:+2348131473756"
            className="text-2xl font-semibold hover:text-yellow-300 transition-colors"
          >
            +234 813 147 3756
          </a>
        </motion.div>
      </div>

      {/* Optional subtle background texture */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ repeat: Infinity, duration: 5, repeatType: "mirror" }}
        className="absolute inset-0 bg-[url('/images/waves.jpg')] bg-cover bg-center opacity-10"
      />
    </section>
  );
}
