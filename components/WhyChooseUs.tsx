import React from 'react';
import { Icons } from '../constants';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Mudah Digunakan",
      desc: "Antarmuka simpel, pemilik bisa langsung mengelola operasional tanpa repot.",
      icon: <Icons.Check />
    },
    {
      title: "Administrasi Otomatis",
      desc: "Hemat waktu hingga 50% dalam pencatatan nota dan laporan keuangan.",
      icon: <Icons.Check />
    },
    {
      title: "Terjangkau untuk UMKM",
      desc: "Berlangganan bulanan, tanpa perlu server mahal.",
      icon: <Icons.Check />
    },
    {
      title: "Pantau dari Mana Saja",
      desc: "Laporan omzet dan stok bisa dicek langsung lewat HP, kapan saja.",
      icon: <Icons.Check />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
            <h6 className="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider mb-2 text-xs md:text-sm">Kenapa Memilih Solusi Smart?</h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Software Pembukuan Bengkel <br className="hidden md:block" />
              <span className="text-primary-600 dark:text-primary-400">Modern & Profesional</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 md:mb-10 leading-relaxed">
              Kelola bengkel Anda secara menyeluruh dengan <em>real-time</em>. <strong>Solusi Smart</strong> dirancang khusus untuk pemilik bengkel agar bisnis otomotif Anda tumbuh lebih cepat, rapi, dan efisien.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {benefits.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 font-bold text-gray-900 dark:text-white text-base md:text-lg">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-full flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    {item.title}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm pl-11 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Dashboard Image (Inline SVG) */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2" data-aos="fade-left">
            <div className="relative p-2 w-full max-w-lg md:max-w-xl mx-auto"> 
              <div className="w-full rounded-2xl md:rounded-3xl shadow-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 p-1 md:p-2 relative z-10 hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                {/* Header Window UI */}
                <div className="h-6 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 flex items-center px-4 gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>

                {/* Dashboard Vector SVG - WIDER (500x320) */}
                <svg viewBox="0 0 500 320" className="w-full h-auto bg-gray-50 dark:bg-gray-900" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                   </defs>

                   {/* Sidebar */}
                   <rect x="0" y="0" width="70" height="320" className="fill-white dark:fill-gray-800" />
                   <rect x="15" y="20" width="40" height="40" rx="8" className="fill-blue-50 dark:fill-gray-700" />
                   <circle cx="35" cy="40" r="8" fill="#3b82f6" />
                   
                   <rect x="20" y="90" width="30" height="4" rx="2" className="fill-slate-300 dark:fill-slate-600" />
                   <rect x="20" y="115" width="30" height="4" rx="2" className="fill-slate-200 dark:fill-slate-700" />
                   <rect x="20" y="140" width="30" height="4" rx="2" className="fill-slate-200 dark:fill-slate-700" />
                   <rect x="20" y="165" width="30" height="4" rx="2" className="fill-slate-200 dark:fill-slate-700" />
                   
                   <rect x="20" y="280" width="30" height="4" rx="2" className="fill-slate-300 dark:fill-slate-600" />

                   {/* Main Content Area */}
                   
                   {/* Top Stats Row */}
                   <g transform="translate(90, 20)">
                      {/* Card 1 */}
                      <rect x="0" y="0" width="120" height="70" rx="10" className="fill-white dark:fill-gray-800 stroke-slate-200 dark:stroke-slate-700" />
                      <circle cx="25" cy="25" r="12" className="fill-blue-50 dark:fill-blue-900/30" />
                      <path d="M20 25 L25 30 L31 20" stroke="#3b82f6" strokeWidth="2" fill="none" />
                      <text x="15" y="52" fontFamily="sans-serif" fontSize="10" className="fill-slate-500 dark:fill-slate-400">Total Servis</text>
                      <text x="15" y="64" fontFamily="sans-serif" fontSize="14" fontWeight="bold" className="fill-slate-800 dark:fill-slate-100">128</text>

                      {/* Card 2 */}
                      <rect x="135" y="0" width="120" height="70" rx="10" className="fill-white dark:fill-gray-800 stroke-slate-200 dark:stroke-slate-700" />
                      <circle cx="160" cy="25" r="12" className="fill-green-50 dark:fill-green-900/30" />
                      <path d="M160 19 V31 M154 25 H166" stroke="#22c55e" strokeWidth="2" fill="none" />
                      <text x="150" y="52" fontFamily="sans-serif" fontSize="10" className="fill-slate-500 dark:fill-slate-400">Pemasukan</text>
                      <text x="150" y="64" fontFamily="sans-serif" fontSize="14" fontWeight="bold" className="fill-slate-800 dark:fill-slate-100">Rp 12.5jt</text>

                      {/* Card 3 */}
                      <rect x="270" y="0" width="120" height="70" rx="10" className="fill-white dark:fill-gray-800 stroke-slate-200 dark:stroke-slate-700" />
                      <circle cx="295" cy="25" r="12" className="fill-orange-50 dark:fill-orange-900/30" />
                      <path d="M290 30 L300 30 L300 20 L290 20 Z" stroke="#f97316" strokeWidth="1.5" fill="none" />
                      <text x="285" y="52" fontFamily="sans-serif" fontSize="10" className="fill-slate-500 dark:fill-slate-400">Stok Kritis</text>
                      <text x="285" y="64" fontFamily="sans-serif" fontSize="14" fontWeight="bold" className="fill-slate-800 dark:fill-slate-100">3 Item</text>
                   </g>

                   {/* Chart Section */}
                   <g transform="translate(90, 110)">
                      <rect x="0" y="0" width="390" height="190" rx="10" className="fill-white dark:fill-gray-800 stroke-slate-200 dark:stroke-slate-700" />
                      <text x="25" y="30" fontFamily="sans-serif" fontSize="13" fontWeight="bold" className="fill-slate-700 dark:fill-slate-200">Statistik Mingguan</text>
                      
                      {/* Grid Lines */}
                      <line x1="25" y1="150" x2="365" y2="150" className="stroke-slate-100 dark:stroke-slate-700" strokeWidth="1" />
                      <line x1="25" y1="110" x2="365" y2="110" className="stroke-slate-100 dark:stroke-slate-700" strokeWidth="1" />
                      <line x1="25" y1="70" x2="365" y2="70" className="stroke-slate-100 dark:stroke-slate-700" strokeWidth="1" />

                      {/* Graph Line */}
                      <path d="M25 130 L81 95 L137 120 L193 60 L249 85 L305 50 L361 80" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      
                      {/* Gradient Area */}
                      <path d="M25 130 L81 95 L137 120 L193 60 L249 85 L305 50 L361 80 V 150 H 25 Z" fill="url(#chartGradient)" />

                      {/* Data Points */}
                      <circle cx="25" cy="130" r="4" className="fill-white dark:fill-gray-800" stroke="#3b82f6" strokeWidth="2"/>
                      <circle cx="137" cy="120" r="4" className="fill-white dark:fill-gray-800" stroke="#3b82f6" strokeWidth="2"/>
                      <circle cx="249" cy="85" r="4" className="fill-white dark:fill-gray-800" stroke="#3b82f6" strokeWidth="2"/>
                      <circle cx="361" cy="80" r="4" className="fill-white dark:fill-gray-800" stroke="#3b82f6" strokeWidth="2"/>

                      {/* X Axis Labels */}
                      <text x="25" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="10" className="fill-slate-400">Sen</text>
                      <text x="81" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="10" className="fill-slate-400">Sel</text>
                      <text x="137" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="10" className="fill-slate-400">Rab</text>
                      <text x="193" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="10" className="fill-slate-400">Kam</text>
                      <text x="249" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="10" className="fill-slate-400">Jum</text>
                      <text x="305" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="10" className="fill-slate-400">Sab</text>
                      <text x="361" y="170" textAnchor="middle" fontFamily="sans-serif" fontSize="10" className="fill-slate-400">Min</text>
                   </g>

                   {/* Floating Tooltip Mockup */}
                   <g transform="translate(290, 110)">
                     <rect x="0" y="0" width="80" height="35" rx="6" className="fill-slate-800 dark:fill-slate-600" />
                     <text x="40" y="22" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#ffffff">Ramai</text>
                     <path d="M35 35 L40 40 L45 35 Z" className="fill-slate-800 dark:fill-slate-600" />
                   </g>
                </svg>
              </div>
              
              {/* Background Decoration Blob */}
              <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-blue-400 rounded-full opacity-20 blur-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-purple-500 rounded-full opacity-20 blur-2xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;