import React from 'react';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-10 pb-16 md:pt-20 md:pb-24 overflow-hidden scroll-mt-custom">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-80 dark:opacity-40 transition-colors duration-300 bg-gradient-to-b from-[#f8f9fa] to-white dark:from-gray-900 dark:to-gray-800"></div>
      <div className="absolute rounded-full bg-blue-300 bg-opacity-20 blur-3xl -z-10 w-64 h-64 md:w-96 md:h-96 top-0 left-1/2 transform -translate-x-1/2 animate-pulse dark:bg-blue-900/30"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 md:mb-8 text-primary-700 dark:text-primary-300 bg-blue-50 dark:bg-primary-900/30 border border-blue-100 dark:border-primary-900/50 rounded-full font-semibold text-xs md:text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              #1 Software Bisnis Terbaik di Indonesia
            </span>
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              Kelola Servis, Stok Sparepart, dan <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500 dark:from-primary-400 dark:to-blue-400">
                Keuangan dalam Satu Dashboard
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Tinggalkan pencatatan manual. <strong>Solusi Smart</strong> adalah aplikasi pembukuan bengkel berbasis cloud yang membantu Anda mengelola servis, stok sparepart, dan laporan keuangan bengkel secara <em>real-time</em>, akurat, dan aman.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
               <div className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200">
                   <div className="text-green-500"><Icons.Check /></div>
                   <span>Sistem Cloud Aman</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200">
                   <div className="text-green-500"><Icons.Check /></div>
                   <span>Kontrol Stok Sparepart</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200">
                   <div className="text-green-500"><Icons.Check /></div>
                   <span>Laporan Otomatis</span>
               </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4">
              <a
                href="#pricing"
                className="bg-primary-600 hover:bg-primary-700 text-white text-base rounded-full px-8 py-3.5 font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto text-center"
              >
                Coba Gratis Sekarang
              </a>
              <a
                href="#features"
                className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 text-base rounded-full px-8 py-3.5 font-bold shadow-sm transition-all transform hover:-translate-y-1 active:scale-95 w-full sm:w-auto text-center"
              >
                Lihat Fitur Lengkap
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;