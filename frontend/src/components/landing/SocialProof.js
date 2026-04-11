import { useRef, useState, useEffect } from 'react';

const stats = [
  { value: 790, suffix: '+', label: 'exercises' },
  { value: 25, suffix: '', label: 'achievements' },
  { value: 20, suffix: '+', label: 'data points' },
  { value: 12, suffix: '-week', label: 'tracking' },
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
    const duration = 1500;
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
    <section data-testid="social-proof" className="py-16 border-y border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center reveal reveal-delay-${i + 1}`}
              data-testid={`stat-${stat.label.replace(/\s/g, '-')}`}
            >
              <div className="text-3xl md:text-4xl font-serif-heading font-light text-[#F0EDE8] tracking-tight">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#9B9B9B] text-xs mt-2.5 uppercase tracking-[0.2em] font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
