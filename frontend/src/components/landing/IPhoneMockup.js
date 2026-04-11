export default function IPhoneMockup({ imageSrc, className, children, hoverable = true }) {
  return (
    <div className={`relative ${hoverable ? 'iphone-hoverable' : ''} ${className || ''}`}>
      <div className="iphone-frame">
        <div className="iphone-notch" />
        {children || (
          imageSrc && <img src={imageSrc} alt="App screenshot" className="iphone-screen" loading="lazy" />
        )}
      </div>
    </div>
  );
}
