export default function Features() {
  const features = [
    {
      icon: "🕐",
      title: "24/7 Call Answering",
      desc: "Never send another customer to voicemail. Your AI receptionist picks up day, night, weekends, and holidays.",
    },
    {
      icon: "📅",
      title: "Appointment Booking",
      desc: "Callers can book, reschedule, or cancel appointments directly. Syncs with your calendar automatically.",
    },
    {
      icon: "🔄",
      title: "Live Call Transfers",
      desc: "Urgent call? Your AI knows when to transfer directly to you or your team in real time.",
    },
    {
      icon: "🇺🇸🇲🇽",
      title: "Bilingual — English & Spanish",
      desc: "San Antonio is 64% Hispanic. Your receptionist speaks both languages fluently and naturally.",
    },
    {
      icon: "🎙️",
      title: "Custom Greetings & Scripts",
      desc: "Sounds like YOUR business. Custom greeting, tone, and call handling — not a generic robot.",
    },
    {
      icon: "💬",
      title: "Follow-Up Texts & Messages",
      desc: "After each call, your customer gets a confirmation text. You get a detailed summary. Everyone wins.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Everything Your Business <span className="text-gold">Needs to Grow</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            More than just answering phones — AlamoAnswer is your complete front-desk solution.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
