"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";
import MobileMenu from "./MobileMenu";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05, y: -1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src="/images/logoa.png"
              alt="Agape Global Logo"
              width={70}
              height={20}
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="hover:text-white">Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/About" className="hover:text-blue">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
          
             <ServicesDropdown />          
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/Career" className="hover:text-blue">Career</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/Contact" className="hover:text-blue">Contact</Link>
          </motion.div>

          <Link href="/Apply" className="ml-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 15px rgba(37, 99, 235, 0.5)", // blue glow
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl shadow transition-all duration-300"
            >
              Apply Now
            </motion.button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(v => !v)} aria-label="toggle menu">
            {open ? <X size={26} color="#fff" /> : <Menu size={26} color="#fff" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="md:hidden border-t border-gray-800 bg-gray-900/60"
          >
            <div className="flex flex-col px-6 py-4 gap-3 text-gray-200">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/About" onClick={() => setOpen(false)}>About</Link>
              <Link href="/Services" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/Career" onClick={() => setOpen(false)}>Career</Link>
              <Link href="/Contact" onClick={() => setOpen(false)}>Contact</Link>

              <Link href="/Apply" onClick={() => setOpen(false)} className="mt-2">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 15px rgba(37, 99, 235, 0.5)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl shadow transition-all duration-300"
                >
                  Apply Now
                </motion.button>
              </Link>
              

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.header>
  );
}
