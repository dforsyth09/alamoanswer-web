"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Will it sound robotic?",
    a: "Not at all. AlamoAnswer uses the latest conversational AI that sounds natural and professional. Most callers can't tell the difference — and many prefer it because there's zero hold time.",
  },
  {
    q: "What if a caller needs to speak to a real person?",
    a: "Your AI receptionist knows when to transfer. For urgent calls or specific requests, it seamlessly connects the caller to you or your team in real time.",
  },
  {
    q: "How fast can I get set up?",
    a: "Most businesses are live within 48 hours. We handle the entire configuration — you just answer a few questions about your business and we do the rest.",
  },
  {
    q: "Does it really work in Spanish?",
    a: "Yes! Our AI is fully bilingual in English and Spanish. It detects the caller's language and responds naturally. Huge for serving San Antonio's diverse community.",
  },
  {
    q: "What happens if I go over my call limit?",
    a: "We'll never cut off your calls mid-month. If you consistently go over, we'll recommend the right plan. No surprise charges.",
  },
  {
    q: "Can I customize what the AI says?",
    a: "Absolutely. You control the greeting, the script, the FAQs, and the booking rules. It's YOUR receptionist — we just make it work.",
  },
  {
    q: "Do I need to change my phone number?",
    a: "Nope. You simply set up call forwarding from your existing number. Your customers see the same number they've always called.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-semibold text-navy pr-4">{q}</span>
        <span className={`text-gold text-xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="pb-5 text-gray-600 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
        </div>
        <div className="mt-12">
          {faqs.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
