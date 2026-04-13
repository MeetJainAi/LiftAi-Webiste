import { useState } from 'react';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast('Please enter a valid email address.');
      return;
    }
    toast("You're on the list! We'll notify you at launch.");
    setEmail('');
    setSubmitted(true);
  };

  return (
    <section data-testid="final-cta" className="py-32 md:py-48 relative reveal">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#A3BCA7]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center relative">
        {/* Urgency badge — scarcity principle */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#A3BCA7]/15 bg-[#A3BCA7]/[0.04] mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A3BCA7] pulse-dot" />
          <span className="text-[#A3BCA7] text-[11px] tracking-[0.15em] uppercase font-medium">
            Limited Early Access
          </span>
        </div>

        <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] mb-5 tracking-tight">
          Train smarter. Lift heavier.
          <br />
          <span className="gradient-text">Track everything.</span>
        </h2>

        <p className="text-[#9B9B9B] text-base md:text-lg mb-12 max-w-md mx-auto leading-relaxed">
          Join the waitlist. Be the first to experience intelligent training.
        </p>

        {/* Social proof number — anchoring effect */}
        <p className="text-[#9B9B9B]/50 text-xs tracking-wide mb-6 uppercase">
          <span className="text-[#F0EDE8]/70 font-medium number-highlight">2,847</span> athletes already on the waitlist
        </p>

        {/* Email form with animated gradient border */}
        <form
          onSubmit={handleSubmit}
          data-testid="waitlist-form"
          className="max-w-[480px] mx-auto mb-8"
        >
          <div className="cta-input-wrapper">
            <div className="cta-input-inner">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                data-testid="waitlist-email-input"
                className="flex-1 bg-transparent text-[#F0EDE8] placeholder-[#555]
                           px-6 py-4 text-sm outline-none"
              />
              <button
                type="submit"
                data-testid="waitlist-submit-btn"
                className="bg-[#F0EDE8] text-[#0F0F0F] rounded-full px-6 py-2.5 text-sm font-medium
                           mr-1.5 my-1.5 hover:bg-white transition-all duration-300
                           hover:shadow-[0_4px_20px_rgba(240,237,232,0.15)]
                           flex items-center gap-2 whitespace-nowrap"
              >
                {submitted ? 'Joined' : 'Join Waitlist'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </form>

        {/* Download secondary link */}
        <a
          href="#"
          data-testid="final-download-btn"
          className="inline-flex items-center gap-2 text-[#9B9B9B]/50 text-xs
                     hover:text-[#9B9B9B] transition-colors duration-300"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Also available on the App Store
        </a>

        <div className="mt-24 pt-8 border-t border-white/[0.04]">
          <p className="text-[#9B9B9B]/30 text-xs tracking-wide">
            &copy; 2025 LiftAi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
