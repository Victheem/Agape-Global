"use client";
import Image from "next/image"
import { motion } from "framer-motion";

export default function WhoWeAre () {
  
  return (
    <section className="py-16 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
          <h4 className="text-sm text-[#F5B700] font-semibold mb-2">Who we are</h4>
              <h2 className="text-3xl font-bold mb-4">Towards Poverty Alleviation</h2>

              <p className="text-gray-300 mb-4">
                Founded in <strong>May 2020</strong>, Aiders Global (Agape) Nigeria Limited (AGAPE) was established with the mission to provide microloans
                to individuals and small businesses — enabling them to purchase goods, access services, and support everyday enterprise growth.
              </p>

              <p className="text-gray-300 mb-4">
                Our focus is the essential needs sector, especially Fast-Moving Consumer Goods (FMCG), where even small capital can create big impact.
              </p>

              <Link href="/about">
                <motion.button whileHover={{ scale: 1.02 }} className="mt-2 bg-transparent border border-gray-700 px-4 py-2 rounded-xl">
                  Discover More
                </motion.button>
              </Link>
            </motion.div>

        {/* Interactive Pie Chart Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
              className="relative"
            >
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-800 h-72 md:h-96">
                <Image src="/images/poverty.jpg" alt="Who we are image" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </section>
  );
};


