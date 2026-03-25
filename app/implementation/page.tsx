import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ImplementationPlan } from "@/components/sections/ImplementationPlan";
import { Process } from "@/components/sections/Process";

export default function ImplementationPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navbar />
      <main className="pt-[72px]">
        <ImplementationPlan />
        <Process />
      </main>
      <Footer />
    </div>
  );
}
