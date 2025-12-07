import React from 'react';
import { TESTIMONIALS_DATA, Icons } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mx-auto mb-12 md:mb-16 max-w-2xl" data-aos="fade-up">
          <h6 className="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider mb-2 text-xs md:text-sm">Testimoni</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Apa Kata Mitra Kami?
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Ratusan bengkel di Indonesia telah beralih ke cara yang lebih cerdas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, index) => (
            <div 
              key={item.id} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="h-full"
            >
              <div className="h-full bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 rounded-2xl md:rounded-3xl p-6 md:p-8 relative transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100 dark:hover:border-gray-600 group flex flex-col">
                <div className="absolute top-4 right-6 md:top-6 md:right-8 opacity-50 md:opacity-100 dark:text-gray-500">
                  <Icons.Quote />
                </div>
                
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Icons.Star key={i} />
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base italic mb-6 md:mb-8 flex-grow leading-relaxed">
                    "{item.content}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
                       <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" /> 
                    </div>
                    <div>
                      <h6 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">{item.name}</h6>
                      <small className="text-gray-500 dark:text-gray-400 uppercase text-[10px] md:text-xs">{item.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;