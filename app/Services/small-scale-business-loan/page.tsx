'use client'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { motion } from "framer-motion";

export default function SmallScaleBusinessLoan() {
  return (
    <div className="bg-gray-950 text-gray-200">
      {/* Hero Section */}
        <section className="relative h-[100vh] flex items-center justify-center bg-black">
        <Image
          src="/images/sme2.jpg"
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
            Small-Scale-Business-Loan
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

       {/* ABOUT THE LOAN */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            Small-Scale-Business-Loan
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
           Empower your business growth with our flexible financing options.
              Whether you’re starting out or scaling up, Agape Global provides the 
              right capital to keep your business running smoothly.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Whether you’re enrolling for a new course or managing an existing
            academic expense, our team ensures a smooth process with fast
            approval, minimal documentation, and personalized repayment plans.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/salary.jpg"
            alt="Student Holding Books"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>
      </section>


      

      {/* Loan Info Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Boost Your Business Potential
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Every successful business starts with the right support. 
            Agape’s Small-Scale Business Loan gives entrepreneurs 
            access to quick funding, helping them purchase inventory, 
            manage operations, and expand sustainably.
          </p>
          <ul className="space-y-2 text-white">
            {[
              'Fast loan approval within 48 hours',
              'Flexible repayment structure',
              'No hidden fees or charges',
              'Business mentorship and financial advisory support',
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-600" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/images/small-scale.jpg"
          alt="Business Owner Using Mobile App"
          width={480}
          height={380}
          className="rounded-2xl shadow-md"
        />
      </section>

      {/* Requirements Section */}
      <section className="bg-black py-14">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">
            Loan Requirements
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-black">
            {[
              'Registered business name (CAC optional)',
              'Valid means of identification',
              'Recent business cashflow statement',
              'Proof of business location',
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
              href="/Apply"
              className="bg-white text-black px-10 py-3 rounded-full font-medium hover:bg-yellow transition"
            >
              Apply for Business Loan
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
