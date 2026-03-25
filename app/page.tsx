import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { Features } from "@/components/sections/Features";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <IndustrySolutions />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
