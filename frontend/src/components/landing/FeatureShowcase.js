import IPhoneMockup from './IPhoneMockup';

export default function FeatureShowcase({
  headline,
  subheadline,
  imageSrc,
  layout = 'right',
  id,
}) {
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
            <IPhoneMockup imageSrc={imageSrc} className="w-[270px] md:w-[310px]" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-testid={id} className="py-24 md:py-40">
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
          <IPhoneMockup imageSrc={imageSrc} className="w-[250px] md:w-[280px]" />
        </div>
      </div>
    </section>
  );
}
