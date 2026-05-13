import { ShieldCheck, Headphones, Zap, Layout } from 'lucide-react';

const Info = () => {
    return (
        <section className="pt-32 pb-16 bg-[#FAFAFF]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-50">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="flex items-center gap-4 lg:justify-center border-r-0 lg:border-r border-slate-100 last:border-0">
                            <div className="w-14 h-14 rounded-2xl bg-[#F0EEFF] flex items-center justify-center text-[#6346FE]">
                                <Layout size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black font-lexend text-slate-900">50+</h3>
                                <p className="text-slate-500 font-hind font-medium">সফল স্টোর</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 lg:justify-center border-r-0 lg:border-r border-slate-100 last:border-0">
                            <div className="w-14 h-14 rounded-2xl bg-[#F0EEFF] flex items-center justify-center text-[#6346FE]">
                                <Zap size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black font-lexend text-slate-900">10+</h3>
                                <p className="text-slate-500 font-hind font-medium">প্রস্তুত ডেমো</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 lg:justify-center border-r-0 lg:border-r border-slate-100 last:border-0">
                            <div className="w-14 h-14 rounded-2xl bg-[#FFF4EE] flex items-center justify-center text-[#FF8A4C]">
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black font-lexend text-slate-900">100%</h3>
                                <p className="text-slate-500 font-hind font-medium">সিকিউর সিস্টেম</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 lg:justify-center border-r-0 last:border-0">
                            <div className="w-14 h-14 rounded-2xl bg-[#EEFBF4] flex items-center justify-center text-[#27C479]">
                                <Headphones size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black font-lexend text-slate-900">24/7</h3>
                                <p className="text-slate-500 font-hind font-medium">এক্সপার্ট সাপোর্ট</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Info;