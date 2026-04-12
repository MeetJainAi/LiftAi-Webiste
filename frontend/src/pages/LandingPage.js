import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import SocialProof from '@/components/landing/SocialProof';
import StickyScrollStory from '@/components/landing/StickyScrollStory';
import FeatureShowcase from '@/components/landing/FeatureShowcase';
import FinalCTA from '@/components/landing/FinalCTA';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = {
  dashboard: 'https://customer-assets.emergentagent.com/job_d15cbc81-82ab-4c61-9d12-fff20d248362/artifacts/vfohqkun_01_dashboard.png',
  coach: 'https://customer-assets.emergentagent.com/job_d15cbc81-82ab-4c61-9d12-fff20d248362/artifacts/1gk2husm_02_coach.png',
  activeWorkout: 'https://customer-assets.emergentagent.com/job_d15cbc81-82ab-4c61-9d12-fff20d248362/artifacts/sub3xc0t_03_active_workout.png',
  workouts: 'https://customer-assets.emergentagent.com/job_d15cbc81-82ab-4c61-9d12-fff20d248362/artifacts/utquczw3_04_workouts.png',
  stats: 'https://customer-assets.emergentagent.com/job_d15cbc81-82ab-4c61-9d12-fff20d248362/artifacts/0oohm72t_05_stats.png',
  achievements: 'https://customer-assets.emergentagent.com/job_smart-training-12/artifacts/ay4oo0cz_06_achievements.png',
  muscleMap: 'https://customer-assets.emergentagent.com/job_smart-training-12/artifacts/nwx2buaq_07_muscle_map.png',
  whyThisPlan: 'https://customer-assets.emergentagent.com/job_smart-training-12/artifacts/mfi073kk_08_why_this_plan.png',
  onboarding: 'https://customer-assets.emergentagent.com/job_smart-training-12/artifacts/411802an_09_onboarding.png',
  profile: 'https://customer-assets.emergentagent.com/job_smart-training-12/artifacts/ba5jlx64_10_profile.png',
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
    imageSrc: IMAGES.muscleMap,
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
    imageSrc: IMAGES.achievements,
    layout: 'left',
  },
  {
    id: 'onboarding-section',
    headline: 'Built around you from day one',
    subheadline: null,
    imageSrc: IMAGES.onboarding,
    layout: 'right',
  },
  {
    id: 'profile-section',
    headline: 'Your training, your data',
    subheadline: null,
    imageSrc: IMAGES.profile,
    layout: 'left',
  },
];

export default function LandingPage() {
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scroll + sync with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

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
