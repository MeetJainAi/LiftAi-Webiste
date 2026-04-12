import { useRef, useEffect } from 'react';
import IPhoneMockup from './IPhoneMockup';

export default function HeroSection({ dashboardImage }) {
  const textRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(scrollY / vh, 1);

      if (textRef.current) {
        textRef.current.style.opacity = String(1 - progress * 0.7);
        textRef.current.style.transform = `translateY(${progress * -40}px)`;
      }
      if (phoneRef.current) {
        phoneRef.current.style.transform = `scale(${1 + progress * 0.05})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      data-testid="hero-section"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Subtle green ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#A3BCA7]/[0.06] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-[#A3BCA7]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Text */}
        <div ref={textRef} className="space-y-8">
          <h1 className="font-serif-heading text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight animate-hero-text">
            Never wonder what to train again
          </h1>
          <p className="text-[#9B9B9B] text-lg md:text-xl max-w-lg leading-relaxed font-light animate-hero-text-delay">
            LiftAi analyzes your recovery, training history, and performance — then builds the exact workout your body needs today.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 animate-hero-cta">
            <a
              href="#"
              data-testid="hero-download-btn"
              className="inline-flex items-center gap-2.5 bg-[#F0EDE8] text-[#0F0F0F] rounded-full px-8 py-3.5 text-sm font-medium
                         hover:bg-white transition-all duration-300 hover:-translate-y-[2px]
                         hover:shadow-lg hover:shadow-white/5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('sticky-scroll') || document.getElementById('sticky-scroll-mobile');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="hero-see-how-btn"
              className="inline-flex items-center gap-2 text-[#9B9B9B] rounded-full px-8 py-3.5 text-sm
                         border border-white/10 hover:border-white/20 hover:text-[#F0EDE8]
                         transition-all duration-300 cursor-pointer bg-transparent"
            >
              See how it works
            </button>
          </div>
        </div>

        {/* Right: Phone */}
        <div ref={phoneRef} className="flex justify-center md:justify-end animate-hero-phone">
          <IPhoneMockup imageSrc={dashboardImage} className="w-[260px] md:w-[300px] lg:w-[320px]" />
        </div>
      </div>
    </section>
  );
}
