import React, { useState, useMemo } from 'react';
import { COURSES } from '../constants';
import CourseCard from '../components/CourseCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { Course } from '../types';

interface CoursesProps {
  onCourseClick: (course: Course) => void;
  onEnroll: (course: Course) => void;
}

export default function Courses({ onCourseClick, onEnroll }: CoursesProps) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [category, setCategory] = useState<string>('Semua');

  const categories = ['Semua', ...Array.from(new Set(COURSES.map(c => c.category)))];

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      const matchSearch = course.title.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === 'all' || (filter === 'free' ? course.isFree : !course.isFree);
      const matchCategory = category === 'Semua' || course.category === category;
      return matchSearch && matchFilter && matchCategory;
    });
  }, [search, filter, category]);

  return (
    <div className="pt-20 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Eksplorasi Kursus</h1>
          <p className="text-slate-600 max-w-2xl">Temukan berbagai kursus bisnis digital terbaik dari mentor profesional. Pilih sesuai minat dan level keahlianmu.</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 md:p-6 rounded-3xl border border-slate-200 mb-12 flex flex-col md:flex-row gap-6 items-center shadow-sm">
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari kursus idamanmu..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-blue outline-none transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100 whitespace-nowrap">
                <Filter size={16} className="text-slate-400" />
                <select 
                  className="bg-transparent text-sm font-semibold outline-none border-none focus:ring-0 p-0"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                >
                  <option value="all">Semua Tipe</option>
                  <option value="free">Gratis</option>
                  <option value="paid">Berbayar</option>
                </select>
             </div>

             <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100 whitespace-nowrap">
                <SlidersHorizontal size={16} className="text-slate-400" />
                <select 
                  className="bg-transparent text-sm font-semibold outline-none border-none focus:ring-0 p-0"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
             </div>
          </div>
        </div>

        {/* Results */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onClick={() => onCourseClick(course)}
                onEnroll={() => onEnroll(course)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
               <Search size={40} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Kursus tidak ditemukan</h3>
            <p className="text-slate-500">Coba ubah kata kunci atau filter pencarianmu.</p>
          </div>
        )}
      </div>
    </div>
  );
}
