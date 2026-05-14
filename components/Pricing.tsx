"use client";

import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface PricingPlan {
  name: string;
  price: string;
  duration: string;
  features: string[];
  buttonText: string;
  badge?: string;
  badgeColor?: string;
  themeColor: string;
  btnColor: string;
  isLifetime?: boolean;
}

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "মাসিক প্ল্যান",
      price: "২,৯৯৯",
      duration: "/মাস",
      features: ["১,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "২৪/৭ সাপোর্ট"],
      buttonText: "এখন শুরু করুন",
      themeColor: "text-[#6346FE]",
      btnColor: "bg-[#6346FE] hover:bg-[#5235E8]",
    },
    {
      name: "৬ মাসের প্ল্যান",
      price: "১৪,৯৯৯",
      duration: "/৬ মাস",
      features: ["৫,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "প্রাধান্য সাপোর্ট"],
      buttonText: "এখন শুরু করুন",
      badge: "জনপ্রিয়",
      badgeColor: "bg-[#E67E22]",
      themeColor: "text-[#E67E22]",
      btnColor: "bg-[#E67E22] hover:bg-[#D35400]",
    },
    {
      name: "বার্ষিক প্ল্যান",
      price: "২৬,৯৯৯",
      duration: "/বছর",
      features: ["১০,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "প্রাধান্য সাপোর্ট", "বছরে ২ মাস ফ্রি"],
      buttonText: "এখন শুরু করুন",
      badge: "সাশ্রয়ী",
      badgeColor: "bg-[#27AE60]",
      themeColor: "text-[#27AE60]",
      btnColor: "bg-[#27AE60] hover:bg-[#219150]",
    },
    {
      name: "লাইফটাইম প্ল্যান",
      price: "",
      duration: "",
      features: ["কোন অর্ডার লিমিট নেই", "আপনার নিজের ডোমেইন", "আপনার নিজের সার্ভার", "এককালীন পেমেন্ট", "সম্পূর্ণ সোর্স কোড"],
      buttonText: "বিস্তারিত জানতে যোগাযোগ করুন",
      themeColor: "text-[#6346FE]",
      btnColor: "bg-[#6346FE] hover:bg-[#5235E8]",
      isLifetime: true,
    },
  ];

  return (
    <section className="py-20 bg-[#FAFBFF] overflow-hidden" id="pricing">
      <div className="px-6 xl:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 font-lexend">
            SaaS মূল্য পরিকল্পনা
          </h2>
          <p className="text-lg text-slate-500 font-medium font-hind">
            আপনার প্রয়োজন অনুযায়ী প্ল্যান নির্বাচন করুন
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 hover:shadow-xl ${
                plan.isLifetime 
                ? "bg-[#F5F3FF] border-indigo-100 shadow-sm" 
                : "bg-white border-slate-100 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className={`absolute top-6 right-6 ${plan.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-4 ${plan.themeColor}`}>{plan.name}</h3>
                {!plan.isLifetime ? (
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl sm:text-4xl font-black ${plan.themeColor}`}>৳{plan.price}</span>
                    <span className="text-slate-400 font-medium ml-1">{plan.duration}</span>
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 font-bold">আপনার নিজের সার্ভারে হোস্টিং</p>
                )}
              </div>

              <div className="flex-1 mb-8">
                <div className="flex items-end gap-2">
                  <div className="space-y-3 flex-1">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="mt-1 shrink-0 w-4 h-4 rounded bg-green-100 text-green-600 flex items-center justify-center">
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className="text-slate-600 text-[14px] font-bold leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.isLifetime && (
                    <div className="w-24 shrink-0">
                      <Image 
                        src="/server.png" 
                        alt="Server" 
                        width={100} 
                        height={100} 
                        className="w-full h-auto object-contain drop-shadow-xl" 
                      />
                    </div>
                  )}
                </div>
              </div>

              <button className={`w-full py-4 cursor-pointer rounded-2xl font-black text-[15px] transition-all duration-300 ${plan.btnColor} text-white shadow-md active:scale-95`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;