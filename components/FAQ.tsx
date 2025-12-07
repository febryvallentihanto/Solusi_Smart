import React, { useState } from 'react';
import { FAQ_DATA, Icons } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midPoint = Math.ceil(FAQ_DATA.length / 2);
  const leftFAQs = FAQ_DATA.slice(0, midPoint);
  const rightFAQs = FAQ_DATA.slice(midPoint);

  const renderFAQItem = (faq: typeof FAQ_DATA[0], globalIndex: number, delay: number) => (
    <div 
      key={faq.id} 
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 mb-4 rounded-xl shadow-sm overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <button
        onClick={() => toggleFAQ(globalIndex)}
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
        type="button"
      >
        <span className={`font-semibold pr-4 ${openIndex === globalIndex ? 'text-primary-600 dark:text-primary-400' : 'text-gray-800 dark:text-gray-200'}`}>
          {faq.question}
        </span>
        <span className={`transform transition-transform duration-300 ${openIndex === globalIndex ? 'rotate-180 text-primary-600 dark:text-primary-400' : 'text-gray-400'}`}>
           {openIndex === globalIndex ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
        </span>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          openIndex === globalIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 pt-0 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-16 max-w-2xl" data-aos="fade-up">
          <h6 className="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider mb-2 text-sm">FAQ</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Temukan jawaban untuk pertanyaan umum seputar Solusi Smart.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          {/* Kolom Kiri */}
          <div className="flex flex-col">
            {leftFAQs.map((faq, i) => renderFAQItem(faq, i, i * 100))}
          </div>

          {/* Kolom Kanan */}
          <div className="flex flex-col">
            {rightFAQs.map((faq, i) => renderFAQItem(faq, i + midPoint, i * 100))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;