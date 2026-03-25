import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Deliverables } from "@/components/sections/Deliverables";
import { Features } from "@/components/sections/Features";

export default function DeliverablesPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navbar />
      <main className="pt-[72px]">
        <Deliverables />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
