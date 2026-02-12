export default function Footer() {
  return (
    <footer className="bg-navy-dark py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="AlamoAnswer" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              AI-powered receptionist built for San Antonio businesses. Never miss another call, appointment, or customer.
            </p>
            <p className="mt-4 text-gray-500 text-xs">
              🏠 Proudly serving the San Antonio, TX metro area
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {["How It Works", "Features", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 hello@alamoanswer.com</li>
              <li>📞 (210) 555-ANSWER</li>
              <li>📍 San Antonio, Texas</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} AlamoAnswer. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
