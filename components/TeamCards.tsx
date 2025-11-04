"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Ben Babatunde",
    role: "Founder & CEO",
    image: "/images/ceo.jpg",
    bio: "A visionary entrepreneur with over a decade of experience in financial inclusion and micro-lending. Passionate about empowering small businesses through accessible credit.",
  },
  {
    name: "Toby Babatunde",
    role: "Head of Operations",
    image: "/images/tobi.jpg",
    bio: "Oversees business operations and ensures efficient service delivery. Tola is committed to excellence and innovation in microfinance management.",
  },
  {
    name: "Grace Adewale",
    role: "Customer Relations Lead",
    image: "/images/account.jpg",
    bio: "Grace builds and maintains client relationships, ensuring satisfaction and trust through empathy, transparency, and timely support.",
  },
  {
    name: "Emmanuel John",
    role: "Technology & Strategy Lead",
    image: "/images/manager.jpg",
    bio: "Leads Agape’s digital transformation initiatives, focusing on data-driven strategies and financial technology innovation.",
  },
];

const TeamCards = () => {
  return (
    <section className="py-20 bg-[#0D0D0D] dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-4 text-blue-700 dark:text-blue-400"
        >
          Meet Our Team
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          The driving force behind Aiders Global (Agape) Nigeria Limited — a
          team dedicated to excellence, innovation, and service.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer perspective"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 backface-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent rounded-2xl flex flex-col justify-end p-4 text-left">
                    <h3 className="text-white text-lg font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{member.role}</p>
                    <div className="flex gap-3 mt-2">
                      <Facebook className="text-white w-5 h-5 hover:text-blue-400 transition" />
                      <Twitter className="text-white w-5 h-5 hover:text-sky-400 transition" />
                      <Linkedin className="text-white w-5 h-5 hover:text-blue-500 transition" />
                      <Phone className="text-white w-5 h-5 hover:text-green-400 transition" />
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 bg-blue-700 dark:bg-blue-600 text-white p-6 rounded-2xl flex flex-col justify-center items-center transform rotate-y-180 backface-hidden">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm italic mb-4">{member.role}</p>
                  <p className="text-sm leading-relaxed text-center">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCards;
