
import React from 'react';
import { PRICING_DATA, Icons } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 relative scroll-mt-custom transition-colors duration-300">
       {/* Background Border Top */}
       <div className="absolute top-0 left-0 w-full border-t border-gray-200 dark:border-gray-700"></div>
       
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mx-auto mb-12 md:mb-16 max-w-2xl" data-aos="fade-up">
          <h6 className="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider mb-2 text-xs md:text-sm">Harga Paket</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Investasi Terbaik untuk Bengkel Anda
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Pilih paket langganan software bengkel yang sesuai dengan skala bisnis Anda. Mulai dari Gratis!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center items-start">
          {PRICING_DATA.map((tier) => (
            <div
              key={tier.id}
              data-aos="fade-up"
              data-aos-delay={tier.delay}
              className="h-full"
            >
              <div className={`h-full rounded-3xl p-6 md:p-8 relative flex flex-col transition-all duration-300 ${
                tier.isPopular
                  ? 'border-2 border-primary-500 shadow-xl bg-white dark:bg-gray-900 md:transform md:scale-105 z-10'
                  : 'border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900 hover:shadow-md'
              }`}>
                {tier.isPopular && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full shadow-sm tracking-wide whitespace-nowrap">
                    PALING DIMINATI
                  </span>
                )}

                <div className="mb-6 md:mb-8 text-center">
                  <h5 className="font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2 md:mb-3 text-xs md:text-sm tracking-wider">
                    {tier.name}
                  </h5>
                  <div className="flex flex-col gap-1 items-center">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 font-medium text-sm leading-tight">{tier.period}</span>
                  </div>
                </div>

                <ul className="flex-1 mb-6 md:mb-8 space-y-3 md:space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                      <div className="mt-0.5 flex-shrink-0">
                         <Icons.Check />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full py-3 px-6 rounded-xl font-bold text-center transition-colors text-sm md:text-base ${
                    tier.isPopular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  {tier.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
