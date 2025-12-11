import { useState, useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { StatisticsSection } from '../components/StatisticsSection';
import { AboutSection } from '../components/AboutSection';
import { ProgramsSection } from '../components/ProgramsSection';
import { InPracticeSection } from '../components/InPracticeSection';
import { ContactSection } from '../components/ContactSection';

export function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [counters, setCounters] = useState({ crimes: 0, officers: 0, casesResolved: 0, responseTime: 0 });
  const [lightActive, setLightActive] = useState(true);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { crimes: 17, officers: 2500, casesResolved: 8742, responseTime: 4 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        crimes: Math.floor(targets.crimes * progress),
        officers: Math.floor(targets.officers * progress),
        casesResolved: Math.floor(targets.casesResolved * progress),
        responseTime: Math.floor(targets.responseTime * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <HeroSection lightActive={lightActive} />
      <StatisticsSection counters={counters} />
      <AboutSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProgramsSection />
      <InPracticeSection />
      <ContactSection />
    </>
  );
}
