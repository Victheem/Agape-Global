import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import ContactMessage from "@/models/ContactMessage";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  // ✅ Connect to the database
  await connectDB();
  console.log("✅ MongoDB connected successfully");

  const body: Body = await request.json();

  // Basic validation
  if (!body.name || !body.name.trim()) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (!body.email || !validateEmail(body.email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  // ✅ Save to DB
  await ContactMessage.create(body);

  return NextResponse.json({ message: "Message sent successfully!" });
}
