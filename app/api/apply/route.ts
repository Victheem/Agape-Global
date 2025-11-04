import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Received Loan Application:", data);

    // TODO: Save to database or send to an email API here

    return NextResponse.json({ message: "Form received successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json({ message: "Error processing form" }, { status: 500 });
  }
}
