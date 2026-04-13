import IPhoneMockup from './IPhoneMockup';

const bentoCards = [
  {
    id: 'progress-section',
    headline: 'Every rep, every gain — tracked',
    subheadline: 'Volume, strength, and PRs. All automatic.',
    imageKey: 'stats',
    accent: 'bg-blue-500/10',
  },
  {
    id: 'muscle-recovery',
    headline: 'Train hard. Not stupid.',
    subheadline: 'Know exactly which muscles need rest.',
    imageKey: 'muscleMap',
    accent: 'bg-red-500/10',
  },
  {
    id: 'workout-library',
    headline: '790 exercises. Zero guesswork.',
    subheadline: 'Categorized, searchable, with form guides.',
    imageKey: 'workouts',
    accent: 'bg-amber-500/10',
  },
  {
    id: 'achievements-section',
    headline: 'Progress you can feel',
    subheadline: 'Unlock milestones as you get stronger.',
    imageKey: 'achievements',
    accent: 'bg-purple-500/10',
  },
];

export default function BentoGrid({ images }) {
  return (
    <section data-testid="bento-grid" className="py-24 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20 reveal">
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-light leading-[1.1] tracking-tight mb-5">
            Everything you need.
            <br />
            <span className="text-[#9B9B9B]">Nothing you don't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {bentoCards.map((card) => (
            <div
              key={card.id}
              data-testid={card.id}
              className="bento-card bg-[#141414] rounded-[1.5rem] border border-white/[0.06] group"
            >
              <div className="p-7 md:p-9 pb-0">
                <h3 className="font-serif-heading text-2xl md:text-3xl font-light tracking-tight mb-2 text-[#F0EDE8] group-hover:text-white transition-colors duration-500">
                  {card.headline}
                </h3>
                <p className="text-[#9B9B9B] text-sm leading-relaxed">
                  {card.subheadline}
                </p>
              </div>
              {/* Phone peek - emerging from bottom */}
              <div className="flex justify-center px-7 md:px-9 pt-8 overflow-hidden" style={{ maxHeight: '340px' }}>
                <div className="w-[180px] md:w-[210px] translate-y-6 group-hover:translate-y-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <IPhoneMockup imageSrc={images[card.imageKey]} hoverable={false} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
