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
  isCustom?: boolean;
  themeColor: string; 
}

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "মাসিক প্ল্যান",
      price: "২,৯৯৯",
      duration: "/মাস",
      features: ["১,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "২৪/৭ সাপোর্ট"],
      buttonText: "এখন শুরু করুন",
      themeColor: "text-blue-600",
    },
    {
      name: "৬ মাসের প্ল্যান",
      price: "১৪,৯৯৯",
      duration: "/৬ মাস",
      features: ["৫,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "প্রাধান্য সাপোর্ট"],
      buttonText: "এখন শুরু করুন",
      badge: "জনপ্রিয়",
      badgeColor: "bg-orange-500",
      themeColor: "text-orange-600",
    },
    {
      name: "বার্ষিক প্ল্যান",
      price: "২৬,৯৯৯",
      duration: "/বছর",
      features: ["১০,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "প্রাধান্য সাপোর্ট", "বছরে ২ মাস ফ্রি"],
      buttonText: "এখন শুরু করুন",
      badge: "সাশ্রয়ী",
      badgeColor: "bg-green-600",
      themeColor: "text-green-600",
    },
    {
      name: "লাইফটাইম প্ল্যান",
      price: "",
      duration: "",
      features: ["কোন অর্ডার লিমিট নেই", "আপনার নিজের ডোমেইন", "আপনার নিজের সার্ভার", "এককালীন পেমেন্ট", "সম্পূর্ণ সোর্স কোড"],
      buttonText: "বিস্তারিত আনতে যোগাযোগ করুন",
      isCustom: true,
      themeColor: "text-blue-700",
    },
  ];

  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black font-lexend text-slate-900 mb-4">
            SaaS মূল্য পরিকল্পনা
          </h2>
          <p className="text-lg text-slate-500 font-hind font-medium">
            আপনার প্রয়োজন অনুযায়ী প্ল্যান নির্বাচন করুন
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 ${
                plan.isCustom 
                ? 'bg-[#F5F3FF] border-purple-100 lg:col-span-1 xl:min-w-[420px]' 
                : 'bg-white border-slate-100 shadow-sm hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className={`absolute top-6 right-6 ${plan.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase`}>
                  {plan.badge}
                </div>
              )}
              <div className="mb-8">
                <h3 className={`text-xl font-bold font-lexend mb-4 ${plan.themeColor}`}>
                  {plan.name}
                </h3>
                
                {!plan.isCustom ? (
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-black ${plan.themeColor}`}>৳{plan.price}</span>
                    <span className="text-slate-400 font-medium font-hind">{plan.duration}</span>
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 font-hind font-semibold">আপনার নিজের সার্ভারে হোস্টিং</p>
                )}
              </div>

              <div className="flex-1 mb-8">
                {plan.isCustom ? (
                  <div className="grid grid-cols-5 gap-2 items-center">
                    <div className="col-span-3 space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="mt-1 shrink-0 w-4 h-4 rounded bg-green-100 text-green-600 flex items-center justify-center">
                            <Check size={12} strokeWidth={4} />
                          </div>
                          <span className="text-slate-600 font-hind text-[14px] font-medium leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="col-span-2 flex justify-center">
                      <Image 
                        src="/server.png" 
                        alt="Server" 
                        width={120}
                        height={120}
                        quality={75}
                        className="w-full max-w-[120px] h-auto object-contain drop-shadow-md"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="mt-1 shrink-0 w-4 h-4 rounded bg-green-100 text-green-600 flex items-center justify-center">
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className="text-slate-600 font-hind text-[14px] font-medium leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className={`w-full py-4 rounded-2xl font-bold font-hind transition-all duration-300 ${
                index === 1 ? 'bg-[#E67E22] hover:bg-[#D35400]' : 
                index === 2 ? 'bg-[#27AE60] hover:bg-[#219150]' : 
                'bg-[#6346FE] hover:bg-[#5235E8]'
              } text-white shadow-lg shadow-black/5`}>
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