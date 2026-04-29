import React from "react";

export function Logo({
  className = "h-12",
  textColor = "#0A0A0A",
}: {
  className?: string;
  textColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 220 70"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="oo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" /> {/* Violet/Purple */}
          <stop offset="100%" stopColor="#2DD4BF" /> {/* Teal */}
        </linearGradient>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');`}
        </style>
      </defs>

      {/* ADH */}
      <text
        x="10"
        y="45"
        fontFamily="'Permanent Marker', cursive, sans-serif"
        fontSize="46"
        fill={textColor}
      >
        ADH
      </text>

      {/* The O O */}
      <circle
        cx="125"
        cy="30"
        r="14"
        stroke="url(#oo-gradient)"
        strokeWidth="6"
        fill="transparent"
      />
      <circle
        cx="150"
        cy="30"
        r="11"
        stroke="url(#oo-gradient)"
        strokeWidth="5"
        fill="transparent"
      />

      {/* K */}
      <text
        x="166"
        y="45"
        fontFamily="'Permanent Marker', cursive, sans-serif"
        fontSize="46"
        fill={textColor}
      >
        K
      </text>

      {/* MEDIA */}
      <text
        x="110"
        y="65"
        fontFamily="sans-serif"
        fontSize="12"
        fontWeight="700"
        letterSpacing="0.8em"
        fill={textColor}
        textAnchor="middle"
      >
        M E D I A
      </text>
    </svg>
  );
}
