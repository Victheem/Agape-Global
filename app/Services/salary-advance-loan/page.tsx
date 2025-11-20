'use client'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { motion } from "framer-motion";

export default function SalaryAdvanceLoan() {
  return (
    <div className="bg-gray-950 text-gray-200">

{/* Hero Section */}
        <section className="relative h-[100vh] flex items-center justify-center bg-black">
        <Image
          src="/images/salary2.jpg"
          alt="Educational Loan Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-blue-400 mb-4"
          >
            Small-Advance-Loan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-gray-300 text-lg"
          >
            Empower your business growth with our flexible financing options.
              Whether you’re starting out or scaling up, Agape Global provides the 
              right capital to keep your business running smoothly.
          </motion.p>
        </div>
      </section> 

      {/* Hero Section */}
      <section className="relative bg-black from-blue-800 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Salary Advance Loan</h1>
            <p className="mb-6 text-lg">
              Get quick access to funds ahead of your payday. Designed for
              salary earners who need short-term financial relief with
              flexible repayment options.
            </p>
            <div className="flex gap-4">
              <Link
                href="/Apply"
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Apply Now
              </Link>
              <Link
                href="/about"
                className="border border-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <Image
              src="/images/salary-advance2.jpg"
              alt="Salary Advance"
              width={420}
              height={420}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Loan Info Section */}
      <section className="mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center bg-black">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Why Choose Salary Advance?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Life happens — unexpected bills, family needs, or emergencies can
            occur before payday. Our Salary Advance Loan helps you stay afloat
            without stress.
          </p>
          <ul className="space-y-2 text-white">
            {[
              'Quick approval and disbursement',
              'No collateral required',
              'Flexible repayment tied to your salary cycle',
              'Low interest rates for consistent earners',
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-blue-600" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/images/happy.png"
          alt="Employee using mobile banking"
          width={480}
          height={380}
          className="rounded-2xl shadow-md"
        />
      </section>

      {/* Requirements Section */}
      <section className="bg-black py-14">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-blue-700">
            Requirements
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-black">
            {[
              'Recent salary slip',
              'Valid means of identification',
              'Bank statement (3–6 months)',
              'Employment verification letter',
            ].map((req, i) => (
              <div
                key={i}
                className="p-4 bg-gray-100 rounded-xl shadow-sm w-64"
              >
                <p>{req}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/apply"
              className="bg-blue-700 text-white px-10 py-3 rounded-full font-medium hover:bg-blue-800 transition"
            >
              Apply for Salary Advance
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
