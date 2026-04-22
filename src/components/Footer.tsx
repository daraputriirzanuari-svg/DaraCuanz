import React from 'react';
import { Mail, Phone, Play, Globe, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'courses' | 'about') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">Cuans</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Misi kami adalah mendemokratisasi edukasi bisnis digital di Indonesia. Siapapun bisa sukses asal memiliki kemauan untuk belajar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Play size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">NavigasiCepat</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-white flex items-center gap-1 group transition-colors">
                  Beranda <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="text-slate-400 hover:text-white flex items-center gap-1 group transition-colors">
                  Daftar Kursus <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-slate-400 hover:text-white flex items-center gap-1 group transition-colors">
                  Tentang Kami <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-brand-blue" />
                hello@cuans.id
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-brand-blue" />
                +62 812 3456 7890
              </li>
              <li className="text-slate-400 italic text-sm mt-4">
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-900 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Cuans Indonesia. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
