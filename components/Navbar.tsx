
import React, { useState } from 'react';
import { Icons } from '../constants';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Fitur', href: '#features' },
    { name: 'Harga', href: '#pricing' },
    { name: 'Kontak', href: '#contact' },
  ];

  // Fungsi untuk menangani scroll yang halus dan akurat
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Khusus Beranda, scroll ke paling atas
    if (targetId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80; // Sesuaikan dengan tinggi navbar (h-20)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, '#home')}
              className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"
            >
              Solusi <span className="text-primary-600 dark:text-primary-400">Smart</span>
            </a>
          </div>

          {/* 2. Desktop Navigation (Centered) */}
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors text-sm lg:text-base cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 3. Right Side Actions (Buttons & Theme) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Icons.Sun /> : <Icons.Moon />}
            </button>

            {/* Login Button */}
            <button 
              onClick={() => onNavigate('login')}
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-primary-600 px-3 py-2 transition-colors"
            >
              Masuk
            </button>

            {/* CTA Button */}
            <button
              onClick={() => onNavigate('signup')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-bold shadow-sm transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Daftar Sekarang
            </button>
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <Icons.Sun /> : <Icons.Moon />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-center text-gray-700 dark:text-gray-200 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3 px-3">
               <button 
                 onClick={() => { setIsOpen(false); onNavigate('login'); }}
                 className="text-center w-full py-2 font-medium text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
               >
                 Masuk
               </button>
               <button 
                 onClick={() => { setIsOpen(false); onNavigate('signup'); }}
                 className="text-center w-full py-2 font-bold text-white bg-primary-600 rounded-lg hover:bg-primary-700"
               >
                 Daftar Sekarang
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
