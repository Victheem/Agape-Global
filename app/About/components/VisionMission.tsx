"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-black text-gray-200">
      <div className="container mx-auto px-6 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-yellow-400"
        >
          Our Vision & Mission
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition"
          >
            <div className="flex justify-center mb-4">
              <Lightbulb className="w-10 h-10 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be a leading financial solutions provider empowering individuals and
              businesses through innovative and accessible digital lending services
              that transform lives and inspire economic growth.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition"
          >
            <div className="flex justify-center mb-4">
              <Target className="w-10 h-10 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver secure, transparent, and tailored financial solutions that meet
              the unique needs of students, professionals, and entrepreneurs while
              maintaining integrity, innovation, and customer satisfaction.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
