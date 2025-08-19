import React from "react";

interface SupplyLiquidityIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function SupplyLiquidityIcon({
  width = 80,
  height = 80,
  className = "",
}: SupplyLiquidityIconProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle */}
        <circle cx="200" cy="200" r="180" fill="url(#supplyGradient)" />

        {/* Hand receiving money illustration */}
        <g>
          {/* Hand */}
          <path
            d="M120 280 Q140 260 160 270 L200 250 Q220 240 240 250 L280 230 Q300 225 310 240 L320 260 Q325 280 310 290 L280 310 L240 330 L200 340 L160 330 L120 310 Z"
            fill="url(#handGradient)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
          />

          {/* Money/Coin falling into hand */}
          <circle cx="200" cy="150" r="25" fill="url(#coinGradient)" />
          <text
            x="200"
            y="158"
            textAnchor="middle"
            fill="white"
            fontSize="20"
            fontWeight="bold"
          >
            $
          </text>

          {/* Arrow showing direction */}
          <path
            d="M200 180 L200 220 M190 210 L200 220 L210 210"
            stroke="#4ECDC4"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <defs>
          <linearGradient
            id="supplyGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
