import React from 'react';
import Hero from '../components/Hero';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../constants';
import { Share2, Zap, Shield, Users, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Course } from '../types';

interface HomeProps {
  onNavigate: (page: any) => void;
  onCourseClick: (course: Course) => void;
}

export default function Home({ onNavigate, onCourseClick }: HomeProps) {
  const featuredCourses = COURSES.slice(0, 3);

  const features = [
    { icon: <Zap className="text-yellow-500" />, title: 'Belajar Cepat', desc: 'Kurikulum praktis yang disusun langsung oleh praktisi industri.' },
    { icon: <Users className="text-brand-blue" />, title: 'Networking', desc: 'Bergabung dengan komunitas eksklusif siswa dan alumni Cuans.' },
    { icon: <Shield className="text-green-500" />, title: 'Terpercaya', desc: 'Materi yang selalu update sesuai tren bisnis digital global.' },
    { icon: <Share2 className="text-purple-500" />, title: 'Akses Fleksibel', desc: 'Belajar kapan saja dan di mana saja melalui dashboard intuitif.' },
  ];

  return (
    <div>
      <Hero onExplore={() => onNavigate('courses')} />

      {/* Stats Section */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">10k+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">50+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Kursus Pilihan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">20+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Mentor Expert</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">1.2k+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Review Positif</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Kursus Terpopuler</h2>
            <p className="text-slate-600 max-w-xl">Mulai perjalanan karir digitalmu dengan kursus-kursus pilihan yang paling banyak diminati oleh siswa kami.</p>
          </div>
          <button 
            onClick={() => onNavigate('courses')}
            className="flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all"
          >
            Lihat Semua Kursus <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map(course => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onClick={() => onCourseClick(course)}
              onEnroll={() => onCourseClick(course)}
            />
          ))}
        </div>
      </section>

      {/* Transition to Features */}
      <section className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <h2 className="text-4xl font-bold mb-16">Mengapa Belajar di Cuans?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all text-left"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Siap Mengubah Karirmu?</h2>
             <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Gabung dengan ribuan siswa lainnya dan mulai belajar skill bisnis digital impianmu hari ini.</p>
             <button 
                onClick={() => onNavigate('courses')}
                className="bg-brand-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark-blue transition-all"
              >
                Mulai Belajar Sekarang
              </button>
          </div>
        </div>
      </section>
    </div>
  );
}
