"use client";

import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { useState } from "react";

const data = [
  { name: "Reliability", value: 15 },
  { name: "Integrity", value: 15 },
  { name: "Empathy", value: 10 },
  { name: "Humility", value: 10 },
  { name: "Teamwork", value: 15 },
  { name: "Excellence", value: 20 },
  { name: "Customer Focused", value: 15 },
];

const COLORS = [
  "#0077b6",
  "#0096c7",
  "#00b4d8",
  "#48cae4",
  "#90e0ef",
  "#ade8f4",
  "#caf0f8",
];

const CoreValues = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section className="py-20 bg-[#0D0D0D] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-700 dark:text-blue-400">
            AGAPE Core Values (RIEGTEC)
          </h2>
          <p className="text-gray-400 dark:text-gray-300 mb-6">
            Our values define who we are and guide how we operate. At Aiders Global (Agape) Nigeria Limited,
            these principles drive our mission to empower individuals and businesses through accessible
            financial solutions.
          </p>

          <ul className="space-y-2 text-gray-300 dark:text-gray-200">
            <li>💎 <b>Reliability:</b> Consistency in delivering on promises.</li>
            <li>⚖️ <b>Integrity:</b> Upholding transparency and honesty.</li>
            <li>❤️ <b>Empathy:</b> Understanding and caring for our clients’ needs.</li>
            <li>🙏 <b>Humility:</b> Maintaining a grounded and respectful approach.</li>
            <li>👥 <b>Teamwork:</b> Collaborating to achieve shared goals.</li>
            <li>🚀 <b>Excellence:</b> Setting high standards in all we do.</li>
            <li>🎯 <b>Customer Focused:</b> Centering every decision on client satisfaction.</li>
          </ul>
        </motion.div>

        {/* Interactive Pie Chart Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-96 flex justify-center items-center"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                dataKey="value"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    style={{
                      transform:
                        activeIndex === index ? "scale(1.05)" : "scale(1)",
                      transformOrigin: "center",
                      transition: "transform 0.3s ease",
                    }}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  color: "#fff",
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
