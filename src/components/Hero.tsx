export default function Hero() {
  return (
    <section className="relative bg-navy pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-gray-300 text-sm">Serving San Antonio businesses 24/7</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
          Never Miss
          <br />
          <span className="text-gold">Another Call</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Your AI-powered receptionist answers every call, books appointments, and handles customer
          questions — so you can focus on running your San&nbsp;Antonio business.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-gold/20"
          >
            Get Your Free Demo →
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto border-2 border-white/20 hover:border-gold/50 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            ["24/7", "Availability"],
            ["<1 min", "Setup Time"],
            ["Bilingual", "EN & ES"],
          ].map(([big, small]) => (
            <div key={big}>
              <div className="text-2xl md:text-3xl font-bold text-gold">{big}</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">{small}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
