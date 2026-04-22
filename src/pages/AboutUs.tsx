import React from 'react';
import { Target, Eye, Heart, Award, ShieldCheck, Gem } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutUs() {
  const values = [
    { icon: <Heart className="text-rose-500" />, title: 'Inklusivitas', desc: 'Kami percaya setiap orang memiliki hak yang sama untuk belajar bisnis digital.' },
    { icon: <Award className="text-blue-500" />, title: 'Kualitas', desc: 'Materi yang kami sajikan selalu terkurasi dan terupdate sesuai industri.' },
    { icon: <ShieldCheck className="text-emerald-500" />, title: 'Integritas', desc: 'Transparansi dalam setiap proses pembelajaran dan sertifikasi.' },
  ];

  return (
    <div className="pt-20 pb-24">
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-8">Demokratisasi Edukasi Bisnis Digital</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            Cuans lahir dari kegelisahan akan sulitnya akses belajar bisnis digital yang praktis dan terjangkau di Indonesia. Kami hadir untuk menjembatani kesenjangan skill tersebut.
          </p>
          <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative group">
             <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
              alt="Tim Cuans"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-all"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-24 mb-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
               <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
                  <div className="w-16 h-16 bg-brand-light-blue rounded-2xl flex items-center justify-center text-brand-blue mb-8">
                     <Target size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
                  <p className="text-slate-600 leading-relaxed italic">
                    Memberikan akses pembelajaran skill digital yang merata bagi seluruh pemuda Indonesia, dari sabang sampai merauke, melalui platform yang interaktif dan menyenangkan.
                  </p>
               </div>
               <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100">
                  <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-8">
                     <Eye size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
                  <p className="text-slate-600 leading-relaxed italic">
                    Menjadi hub utama bagi talenta digital Indonesia untuk tumbuh, berkolaborasi, dan akhirnya berkontribusi dalam memajukan ekonomi digital nasional.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
         <h2 className="text-4xl font-bold text-slate-900 mb-16">Nilai Utama Kami</h2>
         <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                  {React.cloneElement(v.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
         </div>
      </section>
    </div>
  );
}
