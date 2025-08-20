import { Button } from "@/components/ui/button";
// import CoopiFiLogo from "@/components/icons/CoopiFiLogo";

export default function Header() {
  return (
    <div className="relative px-[10px] py-[10px]">
      <header className="flex items-center justify-between py-6 px-6 lg:px-[150px] relative">
        <div className="flex items-center gap-3">
          {/* <CoopiFiLogo width={32} height={32} /> */}
          <img src="/coopifi-logo.svg" alt="coopifi-logo" />
          {/* <span className="text-xl font-semibold text-white">CoopiFi</span> */}
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

      {/* Glowing bottom border line */}
      <div className="absolute bottom-[10px] left-[150px] right-[150px] h-px bg-gradient-to-r from-[#A0D2F3] to-[#88AAF1] shadow-[0_0_8px_rgba(160,210,243,0.5),0_0_16px_rgba(136,170,241,0.3)]"></div>
    </div>
  );
}
