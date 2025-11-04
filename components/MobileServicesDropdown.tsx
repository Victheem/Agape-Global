"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function MobileServicesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-gray-200 pt-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-gray-800 text-base font-medium py-2 px-3 hover:bg-gray-50 rounded-lg transition"
      >
        <span>Services</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${open ? "rotate-180 text-blue-600" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            key="dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden mt-2 ml-3 flex flex-col space-y-1 text-gray-700 text-sm"
          >
            <li>
              <Link
                href="/services/educational-loan"
                className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
              >
                🎓 Educational Loan
              </Link>
            </li>
            <li>
              <Link
                href="/services/salary-advance"
                className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
              >
                💼 Salary Advance
              </Link>
            </li>
            <li>
              <Link
                href="/services/small-scale-business-loan"
                className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
              >
                🏪 Small Business Loan
              </Link>
            </li>
            <li>
              <Link
                href="/services/asset-loan"
                className="block px-3 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
              >
                🚗 Asset Loan
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
