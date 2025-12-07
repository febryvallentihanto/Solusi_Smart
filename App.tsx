
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';

type PageView = 'home' | 'login' | 'signup';

const App: React.FC = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  
  // State untuk navigasi halaman (Routing sederhana)
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    if (window.AOS) {
      window.AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
      });
    }
  }, []);

  // Handle Theme Change
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  const handleNavigation = (page: string) => {
      setCurrentPage(page as PageView);
      window.scrollTo(0, 0); // Reset scroll ke atas saat pindah halaman
  };

  // Render halaman berdasarkan state currentPage
  const renderContent = () => {
    switch (currentPage) {
      case 'login':
        return <Login onNavigate={handleNavigation} />;
      case 'signup':
        return <SignUp onNavigate={handleNavigation} />;
      default: // 'home'
        return (
          <>
            <Navbar theme={theme} toggleTheme={toggleTheme} onNavigate={handleNavigation} />
            <main className="flex-grow w-full">
              <Hero />
              <WhyChooseUs />
              <Features />
              <Testimonials />
              <Pricing />
              <FAQ />
              <Contact />
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white dark:bg-gray-900 transition-colors duration-300 relative w-full max-w-[100vw] overflow-x-hidden">
      {renderContent()}
    </div>
  );
};

export default App;