import React from 'react';
import { Rocket } from 'lucide-react';

const CTASection = () => {
  interface Partner {
  name: string;
  icon: string;
}

  const partners : Partner[] = [
    { name: "TechMart", icon: "📦" },
    { name: "DailyFood", icon: "🍱" },
    { name: "BeautyCare", icon: "💄" },
    { name: "FashionHub", icon: "👔" },
    { name: "MegaStore", icon: "🏬" },
    { name: "DigitalShop", icon: "💻" },
  ];

  return (
    <section className="py-16 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-10">যারা আমাদের উপর বিশ্বাস রেখেছেন</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <span className="text-xl">{partner.icon}</span>
              <span className="text-lg font-bold text-slate-700">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 lg:px-20">
        <div className="bg-[#6346FE] rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="relative group">
              <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center border border-white/20 backdrop-blur-md shadow-inner transition-transform group-hover:scale-105">
                 <Rocket className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" size={48} fill="currentColor" />
              </div>
              <div className="absolute -bottom-2 -left-2 -right-2 flex justify-center gap-1">
                <div className="w-8 h-4 bg-white/20 rounded-full blur-md"></div>
                <div className="w-12 h-6 bg-white/30 rounded-full blur-lg"></div>
                <div className="w-8 h-4 bg-white/20 rounded-full blur-md"></div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-3 tracking-tight">
                আজই শুরু করুন আপনার ই-কমার্স যাত্রা!
              </h2>
              <p className="text-indigo-100 text-lg font-medium opacity-90">
                Ecomtara এর সাথে আপনার ব্যবসাকে নিয়ে যান নতুন উচ্চতায়।
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full lg:w-auto">
            <button className="bg-white text-[#6346FE] px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)] transition-all active:scale-95 whitespace-nowrap">
              ডেমো দেখুন
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap">
              যোগাযোগ করুন
            </button>
          </div>

          <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-20%] left-[10%] w-40 h-40 bg-black opacity-10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;