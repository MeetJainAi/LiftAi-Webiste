import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0F0F0F]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <span
          data-testid="navbar-logo"
          className="font-serif-heading text-2xl font-semibold tracking-tight text-[#F0EDE8]"
        >
          LiftAi
        </span>
        <a
          href="#"
          data-testid="nav-download-btn"
          className="bg-[#F0EDE8] text-[#0F0F0F] rounded-full px-6 py-2 text-sm font-medium
                     hover:bg-white transition-all duration-300 hover:-translate-y-[1px]
                     hover:shadow-lg hover:shadow-white/5"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
