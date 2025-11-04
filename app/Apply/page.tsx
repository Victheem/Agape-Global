"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    loanType: "",
    amount: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Network error. Please try again later.");
  }
};


  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-20 px-6">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">Apply for a Loan</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Complete the form below to start your application. One of our loan officers will get in touch shortly.
        </p>
      </motion.section>

      {/* FORM SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-10"
      >
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* FULL NAME */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-yellow-400">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
                placeholder="Enter your full name"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-yellow-400">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
                placeholder="Enter your email"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-yellow-400">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
                placeholder="Enter your phone number"
              />
            </div>

            {/* LOAN TYPE */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-yellow-400">Select Loan Type</label>
              <select
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
              >
                <option value="">-- Select --</option>
                <option value="Educational Loan">Educational Loan</option>
                <option value="Salary Advance Loan">Salary Advance Loan</option>
                <option value="Small Scale Business Loan">Small Scale Business Loan</option>
                <option value="Asset Loan">Asset Loan</option>
              </select>
            </div>

            {/* AMOUNT */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-yellow-400">Loan Amount (₦)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
                placeholder="Enter desired loan amount"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-yellow-400">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
                placeholder="Add any additional information..."
              />
            </div>

            {/* SUBMIT */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-yellow-400 text-gray-950 font-semibold py-3 px-10 rounded-full shadow-md hover:bg-yellow-300 transition-all"
              >
                Submit Application
              </motion.button>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Application Submitted 🎉
            </h2>
            <p className="text-gray-400">
              Thank you for applying! Our team will reach out shortly to guide you through the next steps.
            </p>
          </motion.div>
        )}
      </motion.section>
    </main>
  );
}
