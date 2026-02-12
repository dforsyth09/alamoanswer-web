"use client";
import { useState } from "react";

export default function CTAFooter() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [businessType, setBusinessType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      businessType: (form.elements.namedItem("businessType") as HTMLSelectElement).value,
      otherBusinessType: businessType === "other" ? (form.elements.namedItem("otherBusinessType") as HTMLInputElement).value : "",
    };
    try {
      const res = await fetch("https://ejshj07jrd.execute-api.us-east-1.amazonaws.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-navy relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to Stop <span className="text-gold">Missing Calls?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Tell us about your business and we&apos;ll show you how AlamoAnswer can help. No commitment required.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gold">Thank You!</h3>
            <p className="mt-2 text-gray-300">We&apos;ll reach out within 24 hours to discuss your needs.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                name="business"
                type="text"
                required
                placeholder="Business Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                name="website"
                type="url"
                placeholder="Website (optional)"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <select
              name="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full mt-4 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-gray-400 focus:outline-none focus:border-gold transition-colors"
            >
              <option value="">What type of business?</option>
              <option value="plumbing">Plumbing</option>
              <option value="hvac">HVAC</option>
              <option value="dental">Dental</option>
              <option value="salon">Salon / Barbershop</option>
              <option value="medical">Medical Office</option>
              <option value="legal">Legal</option>
              <option value="other">Other</option>
            </select>
            {businessType === "other" && (
              <input
                name="otherBusinessType"
                type="text"
                placeholder="Please describe your business"
                className="w-full mt-4 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
              />
            )}
            {error && <p className="mt-3 text-red-400 text-sm text-center">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-lg shadow-gold/20 disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Get More Info →"}
            </button>
            <p className="mt-3 text-center text-gray-400 text-xs">
              We&apos;ll reach out within 24 hours to discuss how we can help.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
