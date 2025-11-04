"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnniversaryPage() {
  const [images, setImages] = useState<string[]>([]);

  // Load gallery images dynamically
  useEffect(() => {
    const imgArray = [];
    for (let i = 1; i <= 20; i++) {
      imgArray.push(`/images/anniversary/${i}.jpg`);
    }
    setImages(imgArray);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden p-8">
      
      {/* 🎉 Floating 5 Years Star Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-12 left-12 z-50"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="text-6xl font-bold text-yellow-400"
          >
            ⭐
          </motion.div>
          <span className="absolute inset-0 flex items-center justify-center font-extrabold text-2xl text-black">
            5 YEARS
          </span>
        </div>
      </motion.div>

      {/* 🎈 Floating Balloon */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-20 right-16"
      >
        🎈
      </motion.div>

      {/* 🎉 Confetti */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: [Math.random() * 800 + 200, 0],
              x: Math.random() * 1200 - 600,
              opacity: [1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 3,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 🎊 Anniversary Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-24 relative z-10">
        <div className="max-w-xl space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
            Celebrating 5 Incredible Years 🎉
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            From humble beginnings to remarkable milestones — thank you for being
            part of our story. Here’s to innovation, teamwork, and the next big chapter!
          </p>
          <motion.a
            href="/journey"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-bold mt-4 shadow-lg hover:bg-yellow-400 transition-all"
          >
            View Our Journey →
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 md:mt-0"
        >
          <Image
            src="/images/staff-celebration.png"
            alt="Company Staff Celebration"
            width={500}
            height={400}
            className="rounded-2xl shadow-2xl border border-gray-800"
          />
        </motion.div>
      </section>

      {/* 📸 Pinterest-Style Anniversary Gallery */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">
          Anniversary Gallery
        </h2>
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-yellow-400/30"
            >
              <Image
                src={img}
                alt={`Anniversary photo ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
