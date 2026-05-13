import { ShoppingCart, Package, Users, Truck, ShieldAlert, LayoutTemplate } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "ই-কমার্স ওয়েবসাইট",
      desc: "প্রফেশনাল ও মডার্ন ডিজাইনের ই-কমার্স ওয়েবসাইট",
      icon: ShoppingCart,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "ইনভেন্টরি ম্যানেজমেন্ট",
      desc: "স্টক, প্রোডাক্ট, ক্যাটাগরি সহজে পরিচালনা করুন",
      icon: Package,
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      title: "CRM সিস্টেম",
      desc: "কাস্টমার, অর্ডার ও যোগাযোগ ব্যবস্থাপনা",
      icon: Users,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: "কুরিয়ার অটোমেশন",
      desc: "স্বয়ংক্রিয় শিপিং ও ট্র্যাকিং ব্যবস্থা",
      icon: Truck,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "ফ্রড চেকিং",
      desc: "অর্ডার ফ্রড ডিটেকশন ও ঝুঁকি নিয়ন্ত্রণ",
      icon: ShieldAlert,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "ল্যান্ডিং পেজ",
      desc: "প্রচারণার জন্য আকর্ষণীয় ল্যান্ডিং পেজ",
      icon: LayoutTemplate,
      bgColor: "bg-slate-100",
      iconColor: "text-slate-600",
    },
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="px-6 lg:px-20">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black font-lexend text-slate-900 mb-4">
            সবকিছু এক প্ল্যাটফর্মে
          </h2>
          <p className="text-lg text-slate-500 font-hind font-medium">
            আপনার ই-কমার্স ব্যবসা পরিচালনার জন্য প্রয়োজনীয় সকল ফিচার
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group p-4 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-[#6346FE]/5 hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className={`w-28 h-28 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon  size={32} strokeWidth={3} />
              </div>
              
              <h3 className="text-[17px] font-bold font-lexend text-slate-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-500 font-hind leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;