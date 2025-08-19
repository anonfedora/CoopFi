import { Button } from "@/components/ui/button";
import CoopiFiLogo from "@/components/icons/CoopiFiLogo";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 lg:px-12">
      <div className="flex items-center gap-3">
        <CoopiFiLogo width={32} height={32} />
        <span className="text-xl font-semibold text-white">CoopiFi</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a
          href="#features"
          className="text-white hover:text-blue-400 transition-colors"
        >
          Features
        </a>
        <a
          href="#faq"
          className="text-white hover:text-blue-400 transition-colors"
        >
          FAQ
        </a>
        <a
          href="#waitlist"
          className="text-white hover:text-blue-400 transition-colors"
        >
          Waitlist
        </a>
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-[#070021] transition-colors bg-transparent"
        >
          Open App
        </Button>
      </nav>
    </header>
  );
}
