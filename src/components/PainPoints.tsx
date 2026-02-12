export default function PainPoints() {
  const stats = [
    { stat: "85%", desc: "of callers won't leave a voicemail — they just call the next business" },
    { stat: "$1,200", desc: "average revenue lost per missed call for service businesses" },
    { stat: "62%", desc: "of small business calls go unanswered during peak hours" },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
            Are You <span className="text-red-600">Losing Business</span> Right Now?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every missed call is a missed customer. And in San Antonio&apos;s competitive service market,
            they&apos;re calling your competitor instead.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {stats.map(({ stat, desc }) => (
            <div
              key={stat}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-5xl font-extrabold text-navy">{stat}</div>
              <p className="mt-4 text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-navy font-semibold text-lg">
          What if you never missed another call? 🤔
        </p>
      </div>
    </section>
  );
}
