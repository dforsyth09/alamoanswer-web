export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Gonzalez",
      role: "Owner, Gonzalez Family Dental",
      text: "We were missing 30+ calls a week during procedures. AlamoAnswer handles everything — in English AND Spanish. Our bookings are up 40% since we started.",
      stars: 5,
    },
    {
      name: "Robert \"Bobby\" Thompson",
      role: "Thompson HVAC Services",
      text: "Summer is insane for us. Before AlamoAnswer, my phone just rang and rang while we were on jobs. Now every call gets answered and I get a text summary. Game changer.",
      stars: 5,
    },
    {
      name: "Jessica & Mark Rivera",
      role: "Alamo City Plumbing",
      text: "We signed up for the Pro plan and it paid for itself in the first week. One emergency call at 2 AM turned into a $3,200 job we would have missed.",
      stars: 5,
    },
    {
      name: "Sarah Kim",
      role: "Bliss Hair Studio, Stone Oak",
      text: "My stylists can focus on clients instead of running to the phone. The appointment booking just works. Our no-shows dropped too because of the confirmation texts.",
      stars: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Trusted by <span className="text-gold">San Antonio</span> Businesses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Here&apos;s what local business owners are saying about AlamoAnswer.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {testimonials.map(({ name, role, text, stars }) => (
            <div key={name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic">&ldquo;{text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-gold font-bold text-sm">
                  {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{name}</div>
                  <div className="text-gray-500 text-xs">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
