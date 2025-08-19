import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="px-6 lg:px-12 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 mb-4">Powered by Starknet</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Lend and Borrow Crypto Effortlessly on Starknet
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Experience DeFi like never before — lend or borrow with zero gas
              fees, and unlock the power of Starknet&apos;s seamless, scalable
              blockchain
            </p>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#070021] transition-colors px-8 py-3"
            >
              Open App
            </Button>
          </div>

          <div className="relative">
            <div className="flex flex-col items-center gap-4">
              {/* Floating crypto tokens */}
              <div className="relative w-full h-96">
                <div className="absolute top-0 right-0 transform rotate-12 animate-float"></div>
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 animate-float-delayed"></div>
                <div className="absolute top-40 right-1/4 animate-float"></div>
                <div className="absolute bottom-0 left-0 animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="h-px bg-blue-500"></div>
      </div>
    </section>
  );
}
