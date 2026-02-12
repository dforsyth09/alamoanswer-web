export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Sign Up & Tell Us About Your Business",
      desc: "Share your business details, hours, services, and FAQs. We handle everything from there.",
      icon: "📋",
    },
    {
      num: "2",
      title: "We Build Your AI Receptionist",
      desc: "Our team configures your custom AI — trained on your business, your voice, your rules. Ready in 48 hours.",
      icon: "🤖",
    },
    {
      num: "3",
      title: "Start Answering Every Call",
      desc: "Forward your calls to AlamoAnswer. We answer, book, and follow up — you grow your business.",
      icon: "📞",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Up and Running in <span className="text-gold">3 Simple Steps</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            No tech skills needed. No complicated setup. We do the heavy lifting.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

          {steps.map(({ num, title, desc, icon }) => (
            <div key={num} className="relative text-center">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-3xl mx-auto relative z-10 shadow-lg">
                {icon}
              </div>
              <div className="absolute -top-2 -right-2 md:right-auto md:left-[calc(50%+20px)] w-7 h-7 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xs z-20">
                {num}
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
