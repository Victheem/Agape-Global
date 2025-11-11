"use client";

import { motion } from "framer-motion";
import { Building2, Users, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const aboutItems = [
  {
    icon: Building2,
    title: "Who We Are",
    desc: "Agape Global Service is a leading fintech solution provider offering easy, secure, and flexible loan services tailored to meet the needs of individuals and businesses.",
  },
  {
    icon: Target,
    title: "Our Mission",
    desc: "To empower people and businesses through accessible digital financial services that promote growth, stability, and inclusion.",
  },
  {
    icon: Shield,
    title: "Our Vision",
    desc: "To become the most trusted financial technology partner that delivers innovative and transparent solutions for economic empowerment.",
  },
  {
    icon: Users,
    title: "Our Team",
    desc: "We are a team of passionate innovators, financial experts, and developers working together to redefine how people access and manage credit.",
  },
];

export default function AboutCompany() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-maroon-500 mb-6"
        >
          About Agape Global Service
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 leading-relaxed mb-12"
        >
          We are redefining financial accessibility through technology. Agape Global Service offers
          seamless fintech loan solutions designed for individuals, entrepreneurs, and SMEs — making
          financial growth achievable for everyone.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-neutral-900 border-neutral-800 hover:border-maroon-500 transition-colors duration-300 rounded-2xl shadow-lg">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-10 h-10 mx-auto mb-4 text-maroon-500" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button className="rounded-2xl bg-maroon-600 hover:bg-maroon-700 text-white px-8 py-6 text-lg">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
