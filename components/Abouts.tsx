"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Abouts() {
  return (
    <section className="bg-[#0B1220] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A66C2] mb-6">
            Empowering Your Financial Future with Smart Digital Solutions
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Agape Global Service is a forward-thinking Fintech company dedicated to redefining
            lending and financial access across Africa. We leverage technology to provide seamless,
            secure, and affordable loans for individuals, entrepreneurs, and organizations.
          </p>
          <div className="flex gap-4">
            <Button
              className="bg-[#0A66C2] hover:bg-[#084b91] text-white rounded-2xl px-6 py-5 text-lg shadow-lg"
              asChild
            >
              <a href="/about">Read More</a>
            </Button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#0A66C2]/30">
            <Image
              src="/images/woman 5.jpg"
              alt="Agape Global Service"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* Floating gradient glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0A66C2]/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
