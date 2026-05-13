"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'হোম', href: '/' },
        { name: 'ডেমো', href: '#demo' },
        { name: 'ফিচারসমূহ', href: '#features' },
        { name: 'মূল্য পরিকল্পনা', href: '#pricing' },
        { name: 'লাইফটাইম প্ল্যান', href: '#lifetime' },
        { name: 'ব্লগ', href: '#blog' },
        { name: 'যোগাযোগ', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-xl z-50 py-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] transition-all duration-300">
            <div className="px-6 lg:px-12">
                <div className="flex justify-between items-center">

                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-14 h-14 relative">
                           <Image 
                             src="/logo.png" 
                             alt="Ecomtara Logo" 
                             fill 
                             className="object-contain" 
                           />
                        </div>
                        <span className="text-3xl font-lexend font-black tracking-tight text-[#1A1A1A]">
                            Ecomtara
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[#232323] hover:text-[#6346FE] font-hind font-semibold text-[17px] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center">
                        <Link
                            href="/demo"
                            className="px-8 py-3.5 bg-gradient-to-r from-[#6346FE] to-[#8269FF] text-white rounded-xl font-hind font-bold text-[16px] shadow-[0_10px_25px_-5px_rgba(99,70,254,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(99,70,254,0.5)] transition-all hover:-translate-y-0.5 active:scale-95"
                        >
                            ডেমো দেখুন
                        </Link>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#1A1A1A] p-1 focus:outline-none"
                        >
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible h-0'}`}>
                <div className="p-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block font-hind font-medium text-[#232323] text-lg hover:text-[#6346FE] py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/demo"
                        className="block w-full bg-[#6346FE] text-white text-center py-4 rounded-xl font-hind font-bold shadow-lg"
                        onClick={() => setIsOpen(false)}
                    >
                        ডেমো দেখুন
                    </Link>
                </div>
            </div>
            <hr />
        </nav>
    );
};

export default Navbar;