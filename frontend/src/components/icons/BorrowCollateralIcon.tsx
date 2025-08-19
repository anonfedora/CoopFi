import React from "react";

interface BorrowCollateralIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function BorrowCollateralIcon({
  width = 80,
  height = 80,
  className = "",
}: BorrowCollateralIconProps) {
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
        {/* Background */}
        <rect
          x="20"
          y="20"
          width="360"
          height="360"
          rx="20"
          fill="url(#borrowGradient)"
        />

        {/* Stacked coins representing collateral */}
        <g>
          {/* Bottom coin */}
          <ellipse
            cx="150"
            cy="280"
            rx="40"
            ry="15"
            fill="url(#coinGradient1)"
          />
          <ellipse
            cx="150"
            cy="275"
            rx="40"
            ry="15"
            fill="url(#coinGradient2)"
          />

          {/* Middle coin */}
          <ellipse
            cx="150"
            cy="250"
            rx="40"
            ry="15"
            fill="url(#coinGradient1)"
          />
          <ellipse
            cx="150"
            cy="245"
            rx="40"
            ry="15"
            fill="url(#coinGradient2)"
          />

          {/* Top coin */}
          <ellipse
            cx="150"
            cy="220"
            rx="40"
            ry="15"
            fill="url(#coinGradient1)"
          />
          <ellipse
            cx="150"
            cy="215"
            rx="40"
            ry="15"
            fill="url(#coinGradient2)"
          />

          {/* Bitcoin symbol on top coin */}
          <text
            x="150"
            y="222"
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="bold"
          >
            ₿
          </text>
        </g>

        {/* Arrow pointing to loan */}
        <path
          d="M200 250 L280 250 M270 240 L280 250 L270 260"
          stroke="#4ECDC4"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Loan representation */}
        <g>
          <circle cx="320" cy="250" r="30" fill="url(#loanGradient)" />
          <text
            x="320"
            y="258"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="bold"
          >
            $
          </text>
        </g>

        <defs>
          <linearGradient
            id="borrowGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient
            id="coinGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient
            id="coinGradient2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="loanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
