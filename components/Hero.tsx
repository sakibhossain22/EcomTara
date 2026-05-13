import { Code2, RefreshCw, Zap, Rocket, Settings, LucideHeadset } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#FAFAFF] pt-24 lg:pt-32 pb-16">
            <div className="px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6346FE]/10 text-[#6346FE] mb-6 animate-fade-in">
                            <Rocket size={18} />
                            <span className="text-sm font-bold font-hind">আপনার নিজের ব্র্যান্ড, আপনার নিজের ই-কমার্স</span>
                        </div>

                        <h1 className="leading-[1.2] md:leading-[1.4] text-4xl md:text-5xl lg:text-6xl font-black font-lexend text-slate-900  mb-6">
                            আপনার ই-কমার্স ব্যবসার জন্য সম্পূর্ণ <span className="text-[#6346FE]">SaaS সমাধান</span>
                        </h1>

                        <p className="text-lg leading-[1.8] text-slate-600 font-hind  mb-10 max-w-2xl mx-auto lg:mx-0">
                            Ecomtara একটি শক্তিশালী ও সহজেই ব্যবহারযোগ্য ই-কমার্স SaaS প্ল্যাটফর্ম। ওয়েবসাইট, ইনভেন্টরি, CRM, কুরিয়ার অটোমেশনসহ সবকিছু এক জায়গায় — আপনার ব্যবসাকে দিন নতুন উচ্চতা।
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link href="/demo" className="w-full sm:w-auto px-8 py-4 bg-[#6346FE] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#6346FE]/30 hover:-translate-y-1 active:scale-95 transition-all">
                                ডেমো দেখুন <Zap size={18} fill="white" />
                            </Link>
                            <Link href="#pricing" className="w-full sm:w-auto px-8 py-4 border-2 border-[#6346FE] text-[#6346FE] rounded-xl font-bold hover:bg-[#6346FE]/5 transition-all text-center active:scale-95">
                                মূল্য পরিকল্পনা দেখুন
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6">
                            {[
                                { icon: Settings, text: 'সহজ সেটআপ' },
                                { icon: Code2, text: 'কোন কোডিং নয়' },
                                { icon: LucideHeadset, text: '২৪/৭ সাপোর্ট' },
                                { icon: RefreshCw, text: 'নিয়মিত আপডেট' },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 text-slate-800  font-hind">
                                    <div className="p-1.5 rounded-lg bg-white shadow-sm border border-slate-100">
                                        <feature.icon strokeWidth={3} size={18} className="text-[#2600fa] font-black" />
                                    </div>
                                    {feature.text}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none">
                        <div className="relative flex justify-center lg:justify-end items-center">
                            <div className="relative z-10 w-[85%] lg:w-[90%] animate-float shadow-2xl rounded-lg overflow-hidden border-4 border-white">
                                <Image
                                    src="/desktop.png"
                                    alt="Desktop Version"
                                    width={800}
                                    height={500}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-4 lg:left-0 z-20 w-[30%] md:w-[25%] lg:w-[22%] animate-float-delayed shadow-2xl rounded-[2rem] overflow-hidden">
                                <Image
                                    src="/mobile.png"
                                    alt="Mobile Version"
                                    width={250}
                                    height={500}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-tr from-[#6346FE]/20 to-transparent rounded-full blur-3xl -z-10" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero