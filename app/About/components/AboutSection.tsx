"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-black text-gray-600">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white">
            Who <span className="text-blue-400">We Are</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            We are a dynamic and innovative company dedicated to building digital
            experiences that inspire, connect, and transform lives. Our passion lies in
            creating solutions that merge creativity with technology to drive growth and
            lasting impact.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            From humble beginnings, we’ve grown into a team of forward thinkers who
            believe that design, technology, and strategy work best when seamlessly
            integrated. Every project we take on is another opportunity to redefine what’s
            possible.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[300px] md:w-[400px] h-[400px]">
            <Image
              src="/images/girl.png"
              alt="About us"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
