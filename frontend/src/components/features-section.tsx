import { ArrowRight } from "lucide-react";
import BorrowCollateralIcon from "@/components/icons/BorrowCollateralIcon";
import dollar from "../images/Dollar_icon.png";
import eth from "../images/Ethereum_icon.png";

export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white pb-3 border-b-[1px] border-[#B8FAF6] w-fit mx-auto">
            With CoopiFi you can
          </h2>
        </div>

        <div className="space-y-[60px]">
          {/* Supply liquidity and earn interest - Top Section */}
          <div className="grid grid-cols-2 gap-x-[60px] items-stretch">
            <div className="flex gap-[31px] justify-center items-center bg-[#06052D] py-[55px] rounded-[8px]">
              <img src="/usd-coin-gradient-logo.png" alt="usdc" />
              <img src="/usdt-coin-gradient-logo.png" alt="usdc" />
            </div>
            <div className="py-9">
              <h3 className="text-2xl font-medium text-white pb-6 border-b-[2px] border-b-[#05124B] mb-6">
                Supply liquidity and earn interest
              </h3>
              <p className="text-[#737DA7] font-normal mb-6 text-lg">
                Power the future of DeFi on Starknet—supply liquidity, earn
                attractive interest, and enjoy gasless, seamless transactions
                with just a click.
              </p>
              <button className="flex items-center gap-2 text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Borrow Against Collateral - Middle Section with grid layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Borrow Against Collateral
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Unlock instant crypto loans on Starknet—borrow against your
                collateral with zero gas fees and a seamless, wallet-free
                experience.
              </p>
              <button className="flex items-center gap-[10px] text-[#E2E2E2] border-b border-white pb-3 hover:text-blue-400 hover:border-blue-400 transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 flex items-center justify-center bg-blue-400/10 rounded-xl">
                <BorrowCollateralIcon width={80} height={80} />
              </div>
            </div>
          </div>

          {/* Exit or Repay - Bottom Section */}
          <div className="flex items-start gap-8">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-400/10 rounded-xl">
              <svg
                width="40"
                height="40"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="24"
                  stroke="#60A5FA"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="20" cy="25" r="2" fill="#60A5FA" />
                <circle cx="32" cy="22" r="2" fill="#60A5FA" />
                <circle cx="44" cy="25" r="2" fill="#60A5FA" />
                <path
                  d="M18 35 Q32 42 46 35"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-4">
                Exit or Repay
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Effortlessly manage your CoopiFi journey on Starknet—repay loans
                or withdraw your assets with zero gas fees and a seamless,
                one-click experience.
              </p>
              <button className="flex items-center gap-2 text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
