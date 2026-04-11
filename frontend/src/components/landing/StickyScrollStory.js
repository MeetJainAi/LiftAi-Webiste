import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IPhoneMockup from './IPhoneMockup';

gsap.registerPlugin(ScrollTrigger);

export default function StickyScrollStory({ images }) {
  const containerRef = useRef(null);
  const [activeFrame, setActiveFrame] = useState(0);
  const lastFrameRef = useRef(-1);

  const frames = [
    {
      image: images.dashboard,
      title: 'Your workout is ready before you think',
      subtitle: 'Built from your recovery, history, and performance',
    },
    {
      image: images.dashboard,
      title: 'It shows you exactly why',
      subtitle: 'Every decision is backed by real data',
    },
    {
      image: images.activeWorkout,
      title: 'Logging feels effortless',
      subtitle: 'Swipe. Log. Done.',
    },
    {
      image: images.coach,
      title: 'Your coach actually knows you',
      subtitle: 'Not generic advice — real context',
    },
    {
      image: images.stats,
      title: 'Every rep becomes progress',
      subtitle: 'Track strength, volume, and PRs automatically',
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Only run on desktop
    if (window.innerWidth < 768) return;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const frame = Math.min(Math.floor(self.progress * 5), 4);
        if (frame !== lastFrameRef.current) {
          lastFrameRef.current = frame;
          setActiveFrame(frame);
        }
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
      {/* Desktop: Sticky scroll experience */}
      <section
        ref={containerRef}
        id="sticky-scroll"
        data-testid="sticky-scroll-section"
        className="hidden md:block relative"
        style={{ height: '400vh' }}
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="max-w-[1200px] mx-auto px-12 w-full grid grid-cols-2 gap-20 items-center">
            {/* Left: Text that crossfades */}
            <div className="relative" style={{ minHeight: '200px' }}>
              {frames.map((frame, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{
                    opacity: activeFrame === i ? 1 : 0,
                    transform: activeFrame === i
                      ? 'translateY(0)'
                      : activeFrame > i
                        ? 'translateY(-20px)'
                        : 'translateY(20px)',
                    transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                    pointerEvents: activeFrame === i ? 'auto' : 'none',
                  }}
                >
                  <h2 className="font-serif-heading text-4xl lg:text-5xl xl:text-[3.5rem] font-light leading-[1.1] mb-6 tracking-tight">
                    {frame.title}
                  </h2>
                  <p className="text-[#9B9B9B] text-lg leading-relaxed max-w-md">
                    {frame.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: iPhone with crossfading images */}
            <div className="flex flex-col items-center">
              <IPhoneMockup className="w-[280px] lg:w-[300px]" hoverable={false}>
                {frames.map((frame, i) => (
                  <img
                    key={i}
                    src={frame.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      opacity: activeFrame === i ? 1 : 0,
                      transform: activeFrame === i ? 'scale(1)' : 'scale(0.97)',
                      transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                    loading="lazy"
                  />
                ))}
              </IPhoneMockup>

              {/* Progress dots */}
              <div className="flex gap-2 mt-10" data-testid="scroll-progress-dots">
                {frames.map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: activeFrame === i ? '24px' : '6px',
                      backgroundColor: activeFrame === i ? '#A3BCA7' : 'rgba(255,255,255,0.15)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: Simple stacked frames */}
      <section id="sticky-scroll-mobile" className="md:hidden py-20 space-y-28 px-6">
        {frames.map((frame, i) => (
          <div key={i} className="reveal text-center space-y-8">
            <div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-light leading-[1.1] mb-4 tracking-tight">
                {frame.title}
              </h2>
              <p className="text-[#9B9B9B] text-base leading-relaxed">
                {frame.subtitle}
              </p>
            </div>
            <div className="flex justify-center">
              <IPhoneMockup imageSrc={frame.image} className="w-[220px] sm:w-[250px]" />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
