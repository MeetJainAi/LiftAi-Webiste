import { useRef, useEffect } from 'react';
import IPhoneMockup from './IPhoneMockup';

function useParallax(ref, speed = 0.15) {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.innerWidth < 768) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const offset = (center - viewCenter) * speed;
      el.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [ref, speed]);
}

export default function FeatureShowcase({
  headline,
  subheadline,
  imageSrc,
  layout = 'right',
  id,
}) {
  const phoneRef = useRef(null);
  useParallax(phoneRef, 0.12);

  const isCentered = layout === 'centered';
  const isLeft = layout === 'left';

  if (isCentered) {
    return (
      <section data-testid={id} className="py-24 md:py-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center reveal">
          <h2 className="font-serif-heading text-4xl sm:text-5xl font-light leading-[1.1] mb-4 tracking-tight">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-[#9B9B9B] text-lg mb-14 max-w-lg mx-auto leading-relaxed">
              {subheadline}
            </p>
          )}
          <div className="flex justify-center">
            <div ref={phoneRef} className="will-change-transform">
              <IPhoneMockup imageSrc={imageSrc} className="w-[270px] md:w-[310px]" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-testid={id} className="py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className={`reveal ${isLeft ? 'md:order-2' : ''}`}>
          <h2 className="font-serif-heading text-4xl sm:text-5xl font-light leading-[1.1] mb-5 tracking-tight">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-[#9B9B9B] text-lg leading-relaxed max-w-md">
              {subheadline}
            </p>
          )}
        </div>
        <div className={`flex justify-center reveal reveal-delay-2 ${isLeft ? 'md:order-1' : ''}`}>
          <div ref={phoneRef} className="will-change-transform">
            <IPhoneMockup imageSrc={imageSrc} className="w-[250px] md:w-[280px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
