export default function FinalCTA() {
  return (
    <section data-testid="final-cta" className="py-32 md:py-48 reveal">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] mb-10 tracking-tight">
          Train smarter. Lift heavier.
          <br />
          Track everything.
        </h2>
        <a
          href="#"
          data-testid="final-download-btn"
          className="inline-flex items-center gap-2.5 bg-[#F0EDE8] text-[#0F0F0F] rounded-full px-10 py-4 text-base font-medium
                     hover:bg-white transition-all duration-300 hover:-translate-y-[2px]
                     hover:shadow-lg hover:shadow-white/5"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on App Store
        </a>
        <p className="text-[#9B9B9B]/60 text-xs mt-20 tracking-wide">
          &copy; 2025 LiftAi. All rights reserved.
        </p>
      </div>
    </section>
  );
}
