"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesDropdown = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);
  const closeDropdown = () => setOpen(false);

  return (
    <div
      className="relative group inline-blocktext-left"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={closeDropdown}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-white hover:text-blue-600 transition"
      >
        Services
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-white shadow-xl rounded-xl mt-2 w-64 border border-gray-100 z-50"
          >
            <ul className="flex flex-col py-15 text-gray-700 text-sm ">
              <li>
                <Link
                  href="/Services/educational-loan"
                  onClick={closeDropdown}
                  className="block px-4 py-5 hover:bg-blue-50 hover:text-blue-600 rounded-md transition whitespace-nowrap border-b border-gray-200 last:border-none"
                >
                  🎓 Educational Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/salary-advance-loan"
                  onClick={closeDropdown}
                  className="block px-5 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition whitespace-nowrap border-b border-gray-200 last:border-none"
                >
                  💼 Salary Advance
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/small-scale-business-loan"
                  onClick={closeDropdown}
                  className="block px-5 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition whitespace-nowrap  border-b border-gray-200 last:border-none"
                >
                  🏪 Small Scale Business Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/Services/asset-loan"
                  onClick={closeDropdown}
                  className="block px-5 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition  whitespace-nowrap border-b border-gray-200 last:border-none "
                >
                  🚗 Asset Loan
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesDropdown;
