import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // আপনার ল্যান্ডিং পেজের ব্র্যান্ড কালারস
            colors: {
                brand: {
                    primary: "#6346FE",    // মূল বেগুনি রঙ (Buttons & Links)
                    secondary: "#F3F1FF",  // হালকা বেগুনি ব্যাকগ্রাউন্ড
                    dark: "#1A1A1A",       // টেক্সট এর জন্য গাঢ় কালো
                    accent: "#FF6B6B",     // অফার বা ব্যাজ এর জন্য লালচে রঙ
                    green: "#22C55E",      // সাকসেস বা ইয়ারলি প্ল্যান হাইলাইট
                    orange: "#F97316",     // ৬ মাসের প্ল্যান হাইলাইট
                },
            },
            // বাংলা এবং ইংরেজি ফন্ট কনফিগারেশন
            fontFamily: {
                hind: ["var(--font-hind)", "sans-serif"], // হেডলাইন এর জন্য
                noto: ["var(--font-noto)", "sans-serif"], // বডি টেক্সট এর জন্য
                lexend: ["var(--font-lexend)", "sans-serif"], // লোগো বা মেমোরি কার্ড এর জন্য
            },
            // ছবির মতো শ্যাডো ইফেক্ট
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(99, 70, 254, 0.15)',
                'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
            },
            // কাস্টম অ্যানিমেশন (রকেট বা ডেমো কার্ডের জন্য)
            animation: {
                'float': 'floating 3s ease-in-out infinite',
            },
            keyframes: {
                floating: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
};

export default config;