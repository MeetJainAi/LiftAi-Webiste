# LiftAi Landing Page - PRD

## Original Problem Statement
Build a premium, Apple-style landing page for a fitness app called LiftAi. Dark, editorial, premium design inspired by Apple, Notion, Linear.

## Architecture
- **Frontend**: React (CRA) + Tailwind CSS + GSAP ScrollTrigger
- **Backend**: FastAPI (minimal, not used for landing page)
- **Database**: MongoDB (not used for landing page)

## Core Requirements (Static)
- Dark theme: #0F0F0F background, #F0EDE8 text, #A3BCA7 accent green
- Cormorant Garamond serif headings, system sans-serif body
- Apple-style sticky scroll storytelling with GSAP ScrollTrigger
- Scroll-triggered reveal animations (IntersectionObserver)
- iPhone CSS mockups displaying app screenshots
- Fully responsive (mobile stacks vertically, no sticky scroll)

## What's Been Implemented (Dec 2025)
- [x] Hero section with animated text + iPhone mockup
- [x] Social proof strip with count-up animations
- [x] Sticky scroll story (400vh, 5 frames, GSAP ScrollTrigger)
- [x] 7 feature showcase sections (Swipe Logging, Progress, Recovery, Library, Achievements, Onboarding, Profile)
- [x] Final CTA section
- [x] Glass-morphism navbar with scroll detection
- [x] Premium iPhone CSS mockup component
- [x] Reveal animations (fade + translateY)
- [x] Mobile responsive layout
- [x] All data-testid attributes

## Prioritized Backlog
### P0 - Done
- All 11 sections implemented and tested (98% pass)

### P1 - Next
- Upload remaining 5 screenshots (06-10) to replace reused images
- Add Lenis smooth scroll library for butter-smooth scrolling
- Optimize images (WebP/AVIF conversion)

### P2 - Future
- Add subtle grain/noise texture overlay
- Parallax effects on feature sections
- Animated chart line drawing effect in Progress section
- A/B test CTA button copy variations
