import React from 'react';
import { FEATURES_DATA } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-custom">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mx-auto mb-12 md:mb-16 max-w-3xl" data-aos="fade-up">
          <h6 className="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider mb-2 text-xs md:text-sm">Fitur Unggulan Solusi Smart</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Software Manajemen Bengkel untuk Operasional Lebih Efisien
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Kelola seluruh operasional bengkel Anda dalam satu platform meliputi servis, stok sparepart, transaksi, dan laporan keuangan secara menyeluruh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {FEATURES_DATA.map((feature) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={feature.delay}
              className="h-full"
            >
              <div className="h-full bg-gray-50 dark:bg-gray-800/50 border border-transparent dark:border-gray-700 hover:border-blue-100 dark:hover:border-blue-900 hover:bg-white dark:hover:bg-gray-800 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg group flex flex-col">
                <div className="inline-flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 text-primary-600 dark:text-primary-400 rounded-xl mb-5 md:mb-6 p-3 md:p-4 w-14 h-14 md:w-16 md:h-16 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                  {feature.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;