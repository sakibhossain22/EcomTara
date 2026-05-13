import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingCart,
  UtensilsCrossed,
  Sparkles,
  Shirt,
  ExternalLink,
  LucideIcon
} from 'lucide-react';

interface DemoItem {
  title: string;
  url: string;
  image: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

const Demos: React.FC = () => {
  const demoList: DemoItem[] = [
    {
      title: "Electronics Demo",
      url: "electro.shopxet.com",
      image: "/desktop1.png",
      icon: ShoppingCart,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Food Demo",
      url: "food.shopxet.com",
      image: "/desktop2.png",
      icon: UtensilsCrossed,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Cosmetics Demo",
      url: "cosmetics.shopxet.com",
      image: "/desktop3.png",
      icon: Sparkles,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      title: "Fashion Demo",
      url: "fashion.shopxet.com",
      image: "/desktop4.png",
      icon: Shirt,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-14 bg-[#FAFAFF]" id="demo">
      <div className="px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black font-lexend text-slate-900 mb-4 tracking-tight">
            আমাদের লাইভ ডেমো
          </h2>
          <p className="text-lg text-slate-500 font-hind font-medium">
            বিভিন্ন ক্যাটাগরির প্রস্তুত ডেমো দেখুন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {demoList.map((demo: DemoItem, index: number) => (
            <div key={index} className="group relative">

              <div className="bg-white rounded-[2.5rem] p-5 shadow-sm border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#6346FE]/10 group-hover:-translate-y-2">

                <div className="relative aspect-[1200/709] rounded-[1.8rem] overflow-hidden mb-6 border border-slate-50 shadow-inner bg-slate-50">
                  <Image
                    src={demo.image}
                    alt={demo.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
                    priority={index < 2} 
                  />

                  <div className="absolute inset-0 bg-[#6346FE]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <Link
                      href={`https://${demo.url}`}
                      target="_blank"
                      className="bg-white text-[#6346FE] px-7 py-3 rounded-full font-bold font-hind flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl"
                    >
                      ভিজিট করুন <ExternalLink size={18} />
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-1 pb-1">
                  <div className={`w-12 h-12 rounded-2xl ${demo.bgColor} ${demo.color} flex items-center justify-center shrink-0 shadow-sm transition-transform duration-500 group-hover:rotate-[15deg]`}>
                    <demo.icon size={24} strokeWidth={2.5} />
                  </div>

                  <div className="overflow-hidden">
                    <h3 className="text-[17px] font-bold font-lexend text-slate-900 truncate leading-tight mb-1">
                      {demo.title}
                    </h3>
                    <p className="text-[13px] font-medium text-blue-500 font-hind truncate tracking-wide">
                      {demo.url}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Demos;