"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What type of loans does Agape offer?",
    answer:
      "Agape provides Educational Loans, Salary Advance Loans, Asset Loans, and Small Scale Business Loans, designed to meet different financial needs of our clients.",
  },
  {
    question: "Who can apply for a loan?",
    answer:
      "Any employed individual, student, or small business owner with verifiable income and identification can apply for our loan services.",
  },
  {
    question: "How long does loan approval take?",
    answer:
      "Loan approval usually takes between 24 to 48 hours once all required documents have been verified successfully.",
  },
  {
    question: "Do you charge hidden fees?",
    answer:
      "No. We maintain full transparency with our clients. All interest rates and service fees are clearly stated in the loan agreement before approval.",
  },
  {
    question: "Can I apply for more than one loan at a time?",
    answer:
      "You can only apply for one loan category at a time. However, after successful repayment, you may qualify for an upgrade or additional loan.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-950 text-gray-200 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-6 text-yellow-400"
        >
          Frequently Asked Questions
        </motion.h2>

        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          Find answers to common questions about our loan process, eligibility, and repayment.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none hover:bg-gray-900 transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-400"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
