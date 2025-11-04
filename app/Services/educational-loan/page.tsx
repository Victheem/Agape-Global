"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EducationalLoanPage() {
  return (
    <main className="bg-gray-950 text-gray-200">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center bg-black">
        <img
          src="/images/education2.jpg"
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
            Educational Loan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-gray-300 text-lg"
          >
            Empowering students and institutions with easy access to educational
            funding — so you can focus on what matters most: your learning and
            your future.
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
            About the Educational Loan
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Our Educational Loan program is designed to support students,
            parents, and schools in achieving their academic goals. We provide
            flexible financing that covers tuition, accommodation, and study
            materials — making education accessible and stress-free.
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
            src="/images/student-smile.jpg"
            alt="Student Holding Books"
            className="w-full h-[420px] object-cover"
          />
        </motion.div>
      </section>

      {/* ELIGIBILITY & BENEFITS */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">
              Eligibility Criteria
            </h3>
            <ul className="space-y-3 text-gray-400 list-disc pl-6">
              <li>Applicant must be a student or guardian of a student.</li>
              <li>Provide proof of admission or enrollment in a recognized institution.</li>
              <li>Valid means of identification (National ID, Passport, or Voter’s card).</li>
              <li>Guarantor with verifiable income source.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">
              Key Benefits
            </h3>
            <ul className="space-y-3 text-gray-400 list-disc pl-6">
              <li>Quick and transparent loan approval process.</li>
              <li>Flexible repayment terms suited to your financial plan.</li>
              <li>Low interest rates for students and parents.</li>
              <li>Funding available for tuition, materials, and housing.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-yellow-400 text-gray-950 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          Ready to Secure Your Education?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Take the first step toward achieving your dreams with our easy and
          reliable Educational Loan. Apply today and get the financial support
          you deserve.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/Apply"
            className="inline-block bg-gray-950 text-yellow-400 font-semibold py-3 px-10 rounded-full shadow-md hover:bg-gray-800 transition-all"
          >
            Apply Now
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
