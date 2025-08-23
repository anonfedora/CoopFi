import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import FAQSection from "@/components/faq-section";
import WaitlistSection from "@/components/waitlist-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#070021" }}>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
