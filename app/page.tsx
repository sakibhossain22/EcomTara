import Demos from "@/components/Demos";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Features from "@/components/OnePlatform";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Info />
      <Features />
      <Demos />
    </div>
  );
}
