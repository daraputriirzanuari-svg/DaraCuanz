import React, { useState } from 'react';
import { Course } from '../types';
import { formatIDR, cn } from '../lib/utils';
import { CreditCard, Wallet, Landmark, ChevronLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface PaymentPageProps {
  course: Course;
  onBack: () => void;
}

export default function PaymentPage({ course, onBack }: PaymentPageProps) {
  const [method, setMethod] = useState<'va' | 'wallet' | 'card'>('va');
  const [isSuccess, setIsSuccess] = useState(false);

  const paymentMethods = [
    { id: 'va', icon: <Landmark />, label: 'Virtual Account', desc: 'BCA, Mandiri, BNI, BRI' },
    { id: 'wallet', icon: <Wallet />, label: 'E-Wallet', desc: 'GoPay, OVO, Dana, ShopeePay' },
    { id: 'card', icon: <CreditCard />, label: 'Kartu Kredit', desc: 'Visa, Mastercard, JCB' },
  ];

  if (isSuccess) {
    return (
      <div className="pt-32 pb-24 flex items-center justify-center min-h-[60vh]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md p-10 bg-white rounded-[3rem] border border-slate-100 shadow-2xl"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Pembayaran Berhasil!</h1>
          <p className="text-slate-600 mb-10 leading-relaxed">
            Selamat! Pembayaran untuk kursus <span className="font-bold text-slate-900">{course.title}</span> telah kami terima.
          </p>
          <button 
            onClick={onBack}
            className="w-full py-4 rounded-2xl bg-brand-blue text-white font-bold hover:bg-brand-dark-blue transition-all"
          >
            Mulai Belajar Sekarang
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 font-medium mb-12 hover:text-brand-blue transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Kursus
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Ringkasan Pesanan</h2>
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
               <div className="flex gap-4 mb-8 pb-8 border-b border-slate-100">
                  <img 
                    src={course.thumbnail} 
                    className="w-24 h-24 rounded-2xl object-cover" 
                    alt={course.title} 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-1">{course.category}</div>
                    <h3 className="font-bold text-slate-900 line-clamp-2 mb-1">{course.title}</h3>
                    <div className="text-sm text-slate-400">{course.instructor}</div>
                  </div>
               </div>

               <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-slate-500">
                    <span>Harga Kursus</span>
                    <span>{formatIDR(course.price)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Biaya Layanan</span>
                    <span>{formatIDR(2500)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl text-slate-900 pt-4 border-t border-slate-100">
                    <span>Total Bayar</span>
                    <span className="text-brand-blue">{formatIDR(course.price + 2500)}</span>
                  </div>
               </div>

               <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl border border-green-100 italic text-sm text-green-700">
                  <ShieldCheck size={18} />
                  Pembayaran aman & terenkripsi oleh Cuans Secure.
               </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Pilih Metode Pembayaran</h2>
            <div className="space-y-4 mb-10">
              {paymentMethods.map((pm) => (
                <button
                  key={pm.id}
                  onClick={() => setMethod(pm.id as any)}
                  className={cn(
                    "w-full flex items-center gap-4 p-6 rounded-[2rem] border transition-all text-left group",
                    method === pm.id 
                      ? "bg-white border-brand-blue ring-2 ring-brand-blue ring-offset-2" 
                      : "bg-white border-slate-200 hover:border-brand-blue/50"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                    method === pm.id ? "bg-brand-blue text-white" : "bg-slate-50 text-slate-400 group-hover:text-brand-blue"
                  )}>
                    {React.cloneElement(pm.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{pm.label}</div>
                    <div className="text-sm text-slate-400">{pm.desc}</div>
                  </div>
                  <div className="ml-auto">
                    <div className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                      method === pm.id ? "border-brand-blue bg-brand-blue" : "border-slate-200"
                    )}>
                      {method === pm.id && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button 
              onClick={() => setIsSuccess(true)}
              className="w-full py-5 rounded-[2rem] bg-brand-blue text-white font-bold text-lg hover:bg-brand-dark-blue transition-all shadow-xl shadow-brand-blue/20"
            >
              Bayar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
