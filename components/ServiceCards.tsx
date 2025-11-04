"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Educational Loan",
    description:
      "Supporting students and parents with flexible school fee financing and learning-related expenses.",
    icon: "🎓",
    link: "/services/educational-loan",
    image: "/images/student-loan2.jpg",
  },
  {
    id: 2,
    title: "Small Scale Business Loan",
    description:
      "Helping entrepreneurs and startups grow with access to affordable, low-interest business funding.",
    icon: "💼",
    link: "/services/small-business-loan",
    image: "/images/small-scale.jpg",
  },
  {
    id: 3,
    title: "Asset Loan",
    description:
      "Purchase essential assets — from vehicles to equipment — with easy payment plans designed to suit your budget.",
    icon: "🚗",
    link: "/services/asset-loan",
    image: "/images/asset-loan.jpg",
  },
  {
    id: 4,
    title: "Salary Advance Loan",
    description:
      "Get access to a portion of your salary ahead of payday to manage urgent financial needs without stress.",
    icon: "💰",
    link: "/services/salary-advance-loan",
    image: "/images/salary-advane.jpg",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-20 bg-[#0D0D0D] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Our Core Loan Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          AGAPE Global Financials provides accessible and flexible loan services
          designed to empower education, business, and personal growth.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden text-left shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Link href={service.link}>
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-4 left-4 text-3xl">
                    {service.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                  <div className="mt-4 text-blue-500 hover:underline">
                    Learn More →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
