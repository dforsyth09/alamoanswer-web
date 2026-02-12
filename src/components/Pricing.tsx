export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "297",
      desc: "Perfect for getting started",
      features: [
        "AI receptionist during business hours",
        "Custom greeting & scripts",
        "Call summaries via email",
        "Bilingual (English & Spanish)",
        "Up to 100 calls/month",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Pro",
      price: "497",
      desc: "Most popular for growing businesses",
      features: [
        "Everything in Starter, plus:",
        "24/7 call answering",
        "Appointment booking & calendar sync",
        "Live call transfers",
        "Up to 300 calls/month",
        "SMS confirmations to callers",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Premium",
      price: "797",
      desc: "Full-service for established businesses",
      features: [
        "Everything in Pro, plus:",
        "Unlimited calls",
        "Follow-up text sequences",
        "CRM integration",
        "Priority support",
        "Custom call workflows",
        "Monthly performance reports",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Simple, Transparent <span className="text-gold">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            One missed call can cost you $1,200+. AlamoAnswer pays for itself after just one saved customer.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8 items-start">
          {plans.map(({ name, price, desc, features, cta, popular }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-8 transition-all ${
                popular
                  ? "bg-navy text-white shadow-2xl scale-105 border-2 border-gold"
                  : "bg-white border border-gray-200 hover:border-gold/30 hover:shadow-lg"
              }`}
            >
              {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className={`text-xl font-bold ${popular ? "text-gold" : "text-navy"}`}>{name}</h3>
              <p className={`mt-1 text-sm ${popular ? "text-gray-300" : "text-gray-500"}`}>{desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className={`text-5xl font-extrabold ${popular ? "text-white" : "text-navy"}`}>${price}</span>
                <span className={`text-sm ${popular ? "text-gray-300" : "text-gray-500"}`}>/mo</span>
              </div>
              <ul className="mt-8 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-gold mt-0.5">✓</span>
                    <span className={popular ? "text-gray-200" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                className={`mt-8 block text-center font-bold py-3 rounded-xl transition-all ${
                  popular
                    ? "bg-gold hover:bg-gold-light text-navy"
                    : "bg-navy hover:bg-navy-light text-white"
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-500 text-sm">
          All plans include a 14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
