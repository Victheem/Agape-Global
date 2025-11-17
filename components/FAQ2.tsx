"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How do I apply for a loan?", a: "Visit the Apply page, complete the form and await review." },
  { q: "What are the rates?", a: "Rates depend on product and profile; contact us for specifics." },
  { q: "How long is approval?", a: "Typically 24–72 hours depending on verification." },
];

export default function FAQ2() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-yellow-400 mb-6">FAQs</h3>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-gray-900/50 rounded-2xl p-4 border border-gray-800">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`${open === i ? "rotate-180 text-yellow-400" : ""} transition`} />
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 text-gray-300"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
