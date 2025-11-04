'use client'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { motion } from "framer-motion";

export default function AssetLoan() {
  return (
    <div className="bg-gray-950 text-black">
      {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center bg-black">
        <img
          src="/images/asset-loan2.jpg"
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
            Asst Loan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-black text-lg"
          >
            Empower your business growth with our flexible financing options.
              Whether you’re starting out or scaling up, Agape Global provides the 
              right capital to keep your business running smoothly.
          </motion.p>
        </div>
      </section> 

      {/* Hero Section */}
      <section className="relative bg-black from-yellow-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Asset Loan</h1>
            <p className="mb-6 text-lg">
              Acquire essential assets like vehicles, equipment, or machinery 
              without breaking your cash flow. Agape’s Asset Loan gives you the 
              flexibility to own while paying conveniently.
            </p>
            <div className="flex gap-4">
              <Link
                href="/Apply"
                className="bg-black text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-white transition"
              >
                Apply Now
              </Link>
              <Link
                href="/About"
                className="border border-blue px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="mt-10 md:mt-0">
            <Image
              src="/images/asset-loan.jpg"
              alt="Asset Loan Illustration"
              width={420}
              height={420}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Loan Info Section */}
      <section className="mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center bg-black">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Own What You Need, When You Need It
          </h2>
          <p className="text-white mb-4 leading-relaxed">
            Whether you're expanding your business or enhancing your personal 
            comfort, Agape’s Asset Loan provides financial assistance for acquiring 
            tangible assets — from work tools to transport vehicles.
          </p>
          <ul className="space-y-2 text-white">
            {[
              'Up to 80% financing for asset purchase',
              'Flexible repayment plan up to 24 months',
              'Fast documentation and approval',
              'Support for both individuals and SMEs',
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-orange-600" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src="/images/asset-loan3.jpg"
          alt="Customer receiving new equipment"
          width={480}
          height={380}
          className="rounded-2xl shadow-md"
        />
      </section>

      {/* Requirements Section */}
      <section className="bg-black py-14">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-blue-700">
            Loan Requirements
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-gray-700">
            {[
              'Invoice or quotation from asset vendor',
              'Valid means of identification',
              'Proof of steady income or business ownership',
              'Bank statement (6 months)',
            ].map((req, i) => (
              <div
                key={i}
                className="p-4 bg-blue-700 rounded-xl shadow-sm w-64"
              >
                <p>{req}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/Apply"
              className="bg-blue-600 text-white px-10 py-3 rounded-full font-medium hover:bg-orange-700 transition"
            >
              Apply for Asset Loan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
