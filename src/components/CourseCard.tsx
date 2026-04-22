import React from 'react';
import { Course } from '../types';
import { formatIDR, cn } from '../lib/utils';
import { Clock, BarChart, User } from 'lucide-react';
import { motion } from 'motion/react';

interface CourseCardProps {
  course: Course;
  onClick?: () => void;
  onEnroll?: () => void;
}

export default function CourseCard({ course, onClick, onEnroll }: CourseCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-brand-blue/30 transition-all hover:shadow-xl group flex flex-col"
    >
      <div 
        className="relative aspect-video overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-blue">
          {course.category}
        </div>
        {course.isFree && (
          <div className="absolute top-3 right-3 bg-green-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
            GRATIS
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div 
          className="cursor-pointer"
          onClick={onClick}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center gap-1 text-slate-400 text-xs">
              <BarChart size={14} />
              {course.level}
            </span>
            <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
            <span className="flex items-center gap-1 text-slate-400 text-xs">
              <Clock size={14} />
              {course.duration}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 leading-snug group-hover:text-brand-blue transition-colors">
            {course.title}
          </h3>
          
          <p className="text-slate-500 text-sm mb-6 line-clamp-2 italic">
            {course.description}
          </p>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between pt-4 border-t border-slate-50 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-light-blue flex items-center justify-center text-brand-blue">
                <User size={16} />
              </div>
              <span className="text-xs font-medium text-slate-700">{course.instructor}</span>
            </div>
            <div className="text-lg font-bold text-slate-900">
              {course.isFree ? 'Gratis' : formatIDR(course.price)}
            </div>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onEnroll?.();
            }}
            className={cn(
              "w-full py-3 rounded-2xl font-bold transition-all text-center",
              course.isFree 
                ? "bg-slate-900 text-white hover:bg-slate-800" 
                : "bg-brand-blue text-white hover:bg-brand-dark-blue shadow-lg shadow-brand-blue/20"
            )}
          >
            {course.isFree ? 'Akses Sekarang' : 'Daftar Sekarang'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
