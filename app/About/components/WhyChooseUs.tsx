"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Handshake, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
    title: "Trusted & Transparent",
    desc: "We maintain a transparent process with no hidden fees. Your trust is our foundation.",
  },
  {
    icon: <Clock className="w-8 h-8 text-yellow-400" />,
    title: "Quick Loan Approval",
    desc: "Fast and efficient loan approval processes ensure you get funds when you need them most.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-yellow-400" />,
    title: "Flexible Repayment Plans",
    desc: "Enjoy convenient and tailored repayment structures suited to your financial situation.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
    title: "Empowering Growth",
    desc: "We are dedicated to helping individuals and businesses grow sustainably and confidently.",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Professional Support Team",
    desc: "Our friendly team is always available to provide guidance and support every step of the way.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-950 text-gray-200 py-20 px-6 relative overflow-hidden">
      {/* Glowing Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 via-transparent to-yellow-400/5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-yellow-400 mb-6"
        >
          Why Choose Agape Global
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Our goal is not just to provide loans — we aim to build lasting financial relationships based on trust, innovation, and growth.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-yellow-400 transition-all group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-yellow-400/10 rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-400 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
