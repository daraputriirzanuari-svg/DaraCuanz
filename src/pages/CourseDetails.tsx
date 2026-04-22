import React from 'react';
import { Course } from '../types';
import { formatIDR } from '../lib/utils';
import { Clock, BarChart, User, CheckCircle2, PlayCircle, FileText, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface CourseDetailsProps {
  course: Course;
  onEnroll: () => void;
}

export default function CourseDetails({ course, onEnroll }: CourseDetailsProps) {
  const syllabus = [
    { title: 'Pendahuluan & Konsep Dasar', duration: '45m' },
    { title: 'Persiapan Tools & Lingkungan Kerja', duration: '1j 20m' },
    { title: 'Eksplorasi Fitur & Praktik Awal', duration: '2j 10m' },
    { title: 'Strategi Optimasi & Studi Kasus', duration: '3j 05m' },
    { title: 'Proyek Akhir & Review Mentor', duration: '2j 30m' },
  ];

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-light-blue text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                {course.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {course.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-10 text-slate-500">
                <div className="flex items-center gap-2">
                   <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-blue">
                      <User size={20} />
                   </div>
                   <div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Instruktur</div>
                      <div className="text-sm font-bold text-slate-900">{course.instructor}</div>
                   </div>
                </div>
                <div className="flex items-center gap-2">
                   <BarChart size={20} className="text-slate-400" />
                   <div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Level</div>
                      <div className="text-sm font-bold text-slate-900">{course.level}</div>
                   </div>
                </div>
                <div className="flex items-center gap-2">
                   <Clock size={20} className="text-slate-400" />
                   <div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Durasi</div>
                      <div className="text-sm font-bold text-slate-900">{course.duration}</div>
                   </div>
                </div>
              </div>

              <div className="aspect-video rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl relative shadow-slate-200">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                    <PlayCircle size={48} />
                  </div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-12">
                <h2 className="text-2xl font-bold mb-4">Tentang Kursus Ini</h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  {course.description} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Kurikulum Terupdate',
                    'Konsultasi Mentor',
                    'Sertifikat Kelulusan',
                    'Komunitas Belajar',
                    'Akses Selamanya',
                    'Proyek Portofolio'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-green-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Silabus Kursus</h2>
                <div className="space-y-4">
                  {syllabus.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:border-brand-blue/20 transition-all cursor-pointer">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-brand-blue transition-colors">
                             <FileText size={18} />
                          </div>
                          <div className="font-bold text-slate-900">{item.title}</div>
                       </div>
                       <div className="text-sm font-medium text-slate-400">{item.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:relative">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-100"
              >
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {course.isFree ? 'Gratis' : formatIDR(course.price)}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
                  Sekali Bayar, Akses Selamanya
                </div>

                <div className="space-y-4 mb-8">
                   <div className="flex items-center gap-3 text-slate-600 text-sm">
                      <Award size={18} className="text-brand-blue" />
                      Sertifikat Kelulusan
                   </div>
                   <div className="flex items-center gap-3 text-slate-600 text-sm">
                      <PlayCircle size={18} className="text-brand-blue" />
                      20+ Video Materi HD
                   </div>
                   <div className="flex items-center gap-3 text-slate-600 text-sm">
                      <FileText size={18} className="text-brand-blue" />
                      Materi Pendukung & PDF
                   </div>
                </div>

                <button 
                  onClick={onEnroll}
                  className="w-full py-4 rounded-2xl bg-brand-blue text-white font-bold text-lg hover:bg-brand-dark-blue transition-all shadow-xl shadow-brand-blue/30 mb-4"
                >
                  {course.isFree ? 'Akses Sekarang' : 'Daftar & Bayar Sekarang'}
                </button>
                
                <p className="text-center text-xs text-slate-400">
                  Jaminan 7 hari uang kembali*
                </p>
              </motion.div>

              <div className="mt-8 bg-brand-blue/5 p-8 rounded-[2.5rem] border border-brand-blue/10">
                 <h4 className="font-bold text-slate-900 mb-4">Butuh Bantuan?</h4>
                 <p className="text-sm text-slate-600 mb-4">Konsultasi gratis dengan tim Cuans untuk memilih kursus yang tepat.</p>
                 <button className="text-brand-blue font-bold text-sm flex items-center gap-2">
                   Hubungi via WhatsApp →
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
