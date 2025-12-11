import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { NeighborhoodWatch } from './pages/NeighborhoodWatch';
import { YouthOutreach } from './pages/YouthOutreach';
import { ProblemOrientedPolicing } from './pages/ProblemOrientedPolicing';
import { CommunityPartnerships } from './pages/CommunityPartnerships';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <ScrollToTop />
        <Navigation scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/neighborhood-watch" element={<NeighborhoodWatch />} />
          <Route path="/youth-outreach" element={<YouthOutreach />} />
          <Route path="/problem-oriented-policing" element={<ProblemOrientedPolicing />} />
          <Route path="/community-partnerships" element={<CommunityPartnerships />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
