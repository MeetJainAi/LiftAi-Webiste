import { useEffect } from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import SocialProof from '@/components/landing/SocialProof';
import StickyScrollStory from '@/components/landing/StickyScrollStory';
import FeatureShowcase from '@/components/landing/FeatureShowcase';
import FinalCTA from '@/components/landing/FinalCTA';

const IMAGES = {
  dashboard: 'https://customer-assets.emergentagent.com/job_d15cbc81-82ab-4c61-9d12-fff20d248362/artifacts/vfohqkun_01_dashboard.png',
  coach: 'https://customer-assets.emergentagent.com/job_d15cbc81-82ab-4c61-9d12-fff20d248362/artifacts/1gk2husm_02_coach.png',
  activeWorkout: 'https://customer-assets.emergentagent.com/job_d15cbc81-82ab-4c61-9d12-fff20d248362/artifacts/sub3xc0t_03_active_workout.png',
  workouts: 'https://customer-assets.emergentagent.com/job_d15cbc81-82ab-4c61-9d12-fff20d248362/artifacts/utquczw3_04_workouts.png',
  stats: 'https://customer-assets.emergentagent.com/job_d15cbc81-82ab-4c61-9d12-fff20d248362/artifacts/0oohm72t_05_stats.png',
};

const featureSections = [
  {
    id: 'swipe-logging',
    headline: "Logging workouts shouldn't feel like work",
    subheadline: 'No forms. No friction. Just train.',
    imageSrc: IMAGES.activeWorkout,
    layout: 'centered',
  },
  {
    id: 'progress-section',
    headline: 'Every rep, every gain — tracked',
    subheadline: null,
    imageSrc: IMAGES.stats,
    layout: 'right',
  },
  {
    id: 'muscle-recovery',
    headline: 'Train hard. Not stupid.',
    subheadline: 'Know exactly which muscles need rest',
    imageSrc: IMAGES.dashboard,
    layout: 'left',
  },
  {
    id: 'workout-library',
    headline: '790 exercises. Zero guesswork',
    subheadline: null,
    imageSrc: IMAGES.workouts,
    layout: 'right',
  },
  {
    id: 'achievements-section',
    headline: 'Progress you can feel',
    subheadline: null,
    imageSrc: IMAGES.stats,
    layout: 'left',
  },
  {
    id: 'onboarding-section',
    headline: 'Built around you from day one',
    subheadline: null,
    imageSrc: IMAGES.coach,
    layout: 'right',
  },
  {
    id: 'profile-section',
    headline: 'Your training, your data',
    subheadline: null,
    imageSrc: IMAGES.stats,
    layout: 'left',
  },
];

export default function LandingPage() {
  // Global IntersectionObserver for all .reveal elements
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#0F0F0F] min-h-screen" data-testid="landing-page">
      <Navbar />
      <HeroSection dashboardImage={IMAGES.dashboard} />
      <SocialProof />
      <StickyScrollStory images={IMAGES} />

      {featureSections.map((section) => (
        <FeatureShowcase key={section.id} {...section} />
      ))}

      <FinalCTA />
    </main>
  );
}
