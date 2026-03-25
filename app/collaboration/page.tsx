import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CollaborationModel } from "@/components/sections/CollaborationModel";
import { TrustSafety } from "@/components/sections/TrustSafety";

export default function CollaborationPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navbar />
      <main className="pt-[72px]">
        <CollaborationModel />
        <TrustSafety />
      </main>
      <Footer />
    </div>
  );
}
