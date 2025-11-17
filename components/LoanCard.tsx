"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Educational Loan", desc: "Flexible financing for students & families." },
  { title: "Small Scale Business Loan", desc: "Capital for micro & small businesses." },
  { title: "Asset Loan", desc: "Buy assets with manageable repayments." },
  { title: "Salary Advance Loan", desc: "Access a portion of your salary ahead of payday." },
];

export default function LoanCard() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-yellow-400 mb-6">Our Services</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">•</div>
              <h4 className="font-semibold text-lg text-white mb-2">{s.title}</h4>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
