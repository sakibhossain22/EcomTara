import { ShieldCheck, Headphones, Zap, Layout } from 'lucide-react';

const Info = () => {
    return (
        <section className="">
            <div className="px-6 my-8 rounded-xl lg:px-20">
                <div className="bg-white border-2  rounded-3xl p-8 lg:p-12 border-slate-100">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="flex items-center gap-4 lg:justify-center border-r-0 lg:border-r border-slate-100 last:border-0">
                            <div className="w-14 h-14 rounded-2xl bg-[#F0EEFF] flex items-center justify-center text-[#6346FE]">
                                <Layout size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black font-lexend text-[#6346FE]">50+</h3>
                                <p className="text-slate-500 font-hind font-medium">সফল স্টোর</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 lg:justify-center border-r-0 lg:border-r border-slate-100 last:border-0">
                            <div className="w-14 h-14 rounded-2xl bg-[#F0EEFF] flex items-center justify-center text-[#6346FE]">
                                <Zap size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black font-lexend text-[#6346FE]">10+</h3>
                                <p className="text-slate-500 font-hind font-medium">প্রস্তুত ডেমো</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 lg:justify-center border-r-0 lg:border-r border-slate-100 last:border-0">
                            <div className="w-14 h-14 rounded-2xl bg-[#FFF4EE] flex items-center justify-center text-[#FF8A4C]">
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black font-lexend text-[#6346FE]">100%</h3>
                                <p className="text-slate-500 font-hind font-medium">সিকিউর সিস্টেম</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 lg:justify-center border-r-0 last:border-0">
                            <div className="w-14 h-14 rounded-2xl bg-[#EEFBF4] flex items-center justify-center text-[#27C479]">
                                <Headphones size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black font-lexend text-[#6346FE]">24/7</h3>
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