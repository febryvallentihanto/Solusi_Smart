
import React from 'react';
import { Icons } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Fungsi untuk menangani scroll yang halus dan akurat (Sama seperti Navbar)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Khusus Beranda, scroll ke paling atas
    if (targetId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80; // Sesuaikan dengan tinggi navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 border-b border-gray-800 pb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, '#home')}
              className="block text-2xl font-bold mb-4"
            >
              Solusi <span className="text-primary-500">Smart</span>
            </a>
            <p className="text-gray-400 mb-6 md:mb-8 max-w-sm leading-relaxed text-sm md:text-base">
              Mitra digital terbaik untuk pengelolaan bengkel modern. 
              Membantu UMKM otomotif berkembang dengan teknologi yang mudah digunakan.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Icons.Facebook />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-600 transition-colors">
                <Icons.Instagram />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Icons.Twitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700 transition-colors">
                <Icons.LinkedIn />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h5 className="font-bold text-white mb-4 md:mb-6 text-lg">Navigasi</h5>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleScroll(e, '#home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleScroll(e, '#features')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fitur
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => handleScroll(e, '#pricing')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Harga
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h5 className="font-bold text-white mb-4 md:mb-6 text-lg">Legal</h5>
            <ul className="space-y-3 text-sm md:text-base">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bantuan</a></li>
            </ul>
          </div>

          {/* Contact Info (New) */}
          <div>
            <h5 className="font-bold text-white mb-4 md:mb-6 text-lg">Kontak</h5>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-3 text-gray-400">
                <div className="mt-1 flex-shrink-0 text-primary-500">
                  <Icons.Map />
                </div>
                <span>Jl. Teknologi No. 88, Jakarta Selatan, 12430</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="flex-shrink-0 text-primary-500">
                   <Icons.Phone />
                </div>
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="flex-shrink-0 text-primary-500">
                   <Icons.Mail />
                </div>
                <span>support@solusismart.id</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-xs md:text-sm">
          &copy; {currentYear} Solusi Smart. Hak Cipta Dilindungi Undang-Undang.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
