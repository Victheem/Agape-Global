"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Educational Loan",
    desc: "Empowering students and institutions with easy access to educational funding.",
    img: "/images/student-loan.jpg",
    href: "/services/educational-loan",
  },
  {
    title: "Salary Advance Loan",
    desc: "Get financial relief before your payday with a simple, fast approval process.",
    img: "/images/salary-advane.jpg",
    href: "/services/salary-advance",
  },
  {
    title: "Asset Loan",
    desc: "Own valuable assets and equipment through our asset financing support.",
    img: "/images/asset-loan.jpg",
    href: "/services/asset-loan",
  },
  {
    title: "Small Scale Business Loan",
    desc: "Boost your business growth with our tailored funding for entrepreneurs.",
    img: "/images/small-scale.jpg",
    href: "/services/small-business-loan",
  },
];

export default function ServiceOverview() {
  return (
    <section className="bg-gray-950 text-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-yellow-400"
        >
          Choose a Loan Type That Fits You
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/10 transition-all"
            >
              <Link href={service.href}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
