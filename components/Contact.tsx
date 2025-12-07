import React, { useState } from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Tim kami akan segera menghubungi Anda untuk demo aplikasi.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-custom">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
            <h6 className="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider mb-2 text-xs md:text-sm">Hubungi Kami</h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight">
              Konsultasi Sistem Bengkel Gratis
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 md:mb-10 leading-relaxed">
              Ingin tahu bagaimana Solusi Smart bisa meningkatkan profit bengkel Anda? Tim kami siap memberikan demo produk dan konsultasi gratis sesuai kebutuhan bisnis Anda.
            </p>

            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10 md:w-12 md:h-12">
                  <Icons.Map />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white mb-1 text-base md:text-lg">Alamat Kantor</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    Jl. Teknologi No. 88, Jakarta Selatan,<br />
                    DKI Jakarta 12430
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10 md:w-12 md:h-12">
                  <Icons.Phone />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white mb-1 text-base md:text-lg">WhatsApp / Telepon</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">+62 812 3456 7890 (Layanan 24 Jam)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center flex-shrink-0 w-10 h-10 md:w-12 md:h-12">
                  <Icons.Mail />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white mb-1 text-base md:text-lg">Email Support</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">support@solusismart.id</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Jadwalkan Demo Gratis</h4>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5 md:mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Nama pemilik / pengelola bengkel"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5 md:mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5 md:mb-2">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm md:text-base placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="0812xxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5 md:mb-2">Nama Bengkel & Kota</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none text-sm md:text-base placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Contoh: Bengkel Maju Jaya, Jakarta Timur"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 md:py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 mt-2 text-sm md:text-base"
                >
                  Minta Jadwal Demo
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;