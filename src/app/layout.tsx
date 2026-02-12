import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlamoAnswer — Never Miss Another Call | AI Receptionist for San Antonio Businesses",
  description:
    "AI-powered receptionist that answers your business calls 24/7, books appointments, and handles FAQs. Built for San Antonio service businesses. Bilingual English & Spanish.",
  keywords: "AI receptionist, virtual receptionist, San Antonio, answering service, appointment booking, HVAC, plumber, dentist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
