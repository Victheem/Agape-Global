"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import MobileServicesDropdown from "./MobileServicesDropdown";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
        className="p-2 rounded-lg hover:bg-gray-100 transition"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Animated Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed top-0 right-0 w-4/5 h-full bg-white z-50 shadow-xl flex flex-col"
            >
              <div className="flex justify-between items-center px-4 py-3 border-b">
                <h2 className="text-lg font-semibold text-blue-700">AGAPE Global</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex flex-col p-4 space-y-2 text-gray-800">
                <Link href="/" onClick={() => setOpen(false)} className="py-2 text-base hover:text-blue-600">
                  Home
                </Link>

                <Link href="/about" onClick={() => setOpen(false)} className="py-2 text-base hover:text-blue-600">
                  About Us
                </Link>

                {/* Reusable dropdown */}
                <MobileServicesDropdown />

                <Link href="/career" onClick={() => setOpen(false)} className="py-2 text-base hover:text-blue-600">
                  Careers
                </Link>

                <Link href="/contact" onClick={() => setOpen(false)} className="py-2 text-base hover:text-blue-600">
                  Contact Us
                </Link>

                <div className="pt-4">
                  <Link
                    href="/apply"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
