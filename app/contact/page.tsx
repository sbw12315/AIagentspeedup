import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactConsultation } from "@/components/sections/ContactConsultation";
import { RiskDisclaimer } from "@/components/sections/RiskDisclaimer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navbar />
      <main className="pt-[72px]">
        <ContactConsultation />
        <RiskDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
