import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-6 lg:px-[150px] py-20 lg:py-32">
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

          <div className="relative flex justify-center items-center">
            <div className="relative">
              <Image
                src="/stacked-coins.svg"
                alt="Stacked coins illustration"
                width={400}
                height={400}
                className="w-full h-auto max-w-md animate-float"
                priority
              />
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
