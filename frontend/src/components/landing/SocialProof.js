import { useRef, useState, useEffect } from 'react';

const stats = [
  { value: 790, suffix: '+', label: 'exercises', desc: 'in the library' },
  { value: 25, suffix: '', label: 'achievements', desc: 'to unlock' },
  { value: 20, suffix: '+', label: 'data points', desc: 'per session' },
  { value: 12, suffix: '-week', label: 'tracking', desc: 'intelligent cycles' },
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function SocialProof() {
  return (
    <section data-testid="social-proof" className="py-20 md:py-24 relative">
      {/* Top border with accent fade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[600px] h-px bg-gradient-to-r from-transparent via-[#A3BCA7]/20 to-transparent" />
      {/* Bottom border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[600px] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 reveal stagger-children">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center group"
              data-testid={`stat-${stat.label.replace(/\s/g, '-')}`}
            >
              <div className="text-4xl md:text-5xl font-serif-heading font-light text-[#F0EDE8] tracking-tight number-highlight">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#9B9B9B] text-[11px] mt-3 uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </div>
              <div className="text-[#9B9B9B]/40 text-[10px] mt-1 tracking-wide hidden md:block">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
