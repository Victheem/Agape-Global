"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react"; // optional icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* ==== Brand & About ==== */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#003366] to-[#0f4b8f] flex items-center justify-center text-white font-bold">
              AG
            </div>
            <div className="text-white font-semibold text-lg">Agape Global</div>
          </div>
          <p className="text-gray-400 text-sm">
            Empowering your financial journey with student loans, salary advances, asset finance, and small business support.
          </p>

          <div className="flex gap-4 mt-2">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </motion.a>
          </div>
        </div>

        {/* ==== Quick Links ==== */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/career" className="hover:text-white transition">Career</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* ==== Contact Info ==== */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400 text-sm mb-2">
            Mercy Eye Hospital Complex, Plot 15, Umar Audi Road, Fate Round About, Ilorin
          </p>
          <p className="text-gray-400 text-sm mb-2">Phone: +234 813 147 3756</p>
          <p className="text-gray-400 text-sm">Email: info@agapeglobal.com</p>
        </div>

      </div>

      {/* ==== Bottom Copyright ==== */}
      <div className="border-t border-gray-800 mt-4 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Agape Global. All rights reserved.
      </div>
    </footer>
  );
}

