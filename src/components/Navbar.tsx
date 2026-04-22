import React, { useState } from 'react';
import { Menu, X, BookOpen, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  current: 'home' | 'courses' | 'about';
  onNavigate: (page: 'home' | 'courses' | 'about') => void;
}

export default function Navbar({ current, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', id: 'home' as const },
    { label: 'Kursus', id: 'courses' as const },
    { label: 'Tentang Kami', id: 'about' as const },
  ];

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-brand-blue">Cuans</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-blue",
                  current === item.id ? "text-brand-blue" : "text-slate-600"
                )}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-brand-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-dark-blue transition-all shadow-lg shadow-brand-blue/20">
              Mulai Belajar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-4 space-y-2 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-3 rounded-xl text-base font-medium",
                current === item.id ? "bg-brand-light-blue text-brand-blue" : "text-slate-600 hover:bg-slate-50"
              )}
            >
              {item.label}
            </button>
          ))}
          <button className="w-full bg-brand-blue text-white px-4 py-3 rounded-xl font-semibold mt-4">
            Mulai Belajar
          </button>
        </div>
      )}
    </nav>
  );
}
