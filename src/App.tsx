import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, User, Trophy, Folder, Link as LinkIcon, GraduationCap } from 'lucide-react';
import Aurora from './components/Aurora';
import Dock from './components/ui/Dock';

// Pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import AchievementsPage from './pages/Achievements';
import ProjectsPage from './pages/Projects';
import LinksPage from './pages/Links';
import EducationPage from './pages/Education';

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dockItems = [
    { icon: <Home size={24} />, label: 'Home', onClick: () => navigate('/') },
    { icon: <User size={24} />, label: 'About', onClick: () => navigate('/about') },
    { icon: <GraduationCap size={24} />, label: 'Education', onClick: () => navigate('/education') },
    { icon: <Trophy size={24} />, label: 'Achievements', onClick: () => navigate('/achievements') },
    { icon: <Folder size={24} />, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <LinkIcon size={24} />, label: 'Links', onClick: () => navigate('/links') },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Aurora background */}
      <div className="fixed inset-0 -z-10">
        <Aurora
          colorStops={["#ff5941", "#ff8f00", "#ff5941"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      {/* Content sections with page transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/links" element={<LinksPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dock */}
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </main>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;