import React from 'react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light-blue text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              <Star size={14} className="fill-brand-blue" />
              Platform Belajar Digital #1 di Indonesia
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
              Kuasai Masa Depan <br />
              <span className="text-brand-blue">Bisnis Digital-mu</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              Pelajari skill digital yang paling dibutuhkan saat ini. Dari Digital Marketing hingga Startup, semua bisa kamu kuasai bersama mentor berpengalaman.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button 
                onClick={onExplore}
                className="group bg-brand-blue text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-dark-blue transition-all flex items-center gap-3 shadow-xl shadow-brand-blue/25"
              >
                Mulai Eksplorasi
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex -space-x-3 items-center">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=1" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=2" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=3" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
                <div className="pl-6 text-sm text-slate-600 font-medium">
                  <span className="text-slate-900 font-bold">10k+</span> Siswa terdaftar
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <CheckCircle2 size={18} className="text-green-500" />
                Mentor Berkualitas
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <CheckCircle2 size={18} className="text-green-500" />
                Akses Selamanya
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <CheckCircle2 size={18} className="text-green-500" />
                Sertifikat Resmi
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <CheckCircle2 size={18} className="text-green-500" />
                Komunitas Aktif
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                alt="Belajar Bisnis Digital"
                className="w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-light-blue rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 animate-bounce duration-[3000ms]">
               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Star className="fill-green-600" />
               </div>
               <div>
                  <div className="font-bold text-slate-900">4.9/5 Rating</div>
                  <div className="text-xs text-slate-500">Dari 2.000+ Review</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
