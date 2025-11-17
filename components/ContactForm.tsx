"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      setStatus("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto py-50">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        value={formData.name}
        required
        className="w-full border rounded-lg px-3 py-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={formData.email}
        required
        className="w-full border rounded-lg px-3 py-2"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        onChange={handleChange}
        value={formData.subject}
        required
        className="w-full border rounded-lg px-3 py-2"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
        value={formData.message}
        required
        className="w-full border rounded-lg px-3 py-2 min-h-[120px]"
      />
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white hover:bg-blue-700"
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
      {status && <p className="text-center mt-2">{status}</p>}

      
    </form>

  );
}
