import React from "react";
import { useRouter } from "next/router";

export const triangle = (
  <svg
    width="19"
    height="33"
    viewBox="0 0 19 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_207_2)">
      <path
        d="M14.1942 12.5521L4.28232 24.0683L4.52479 0.831444L14.1942 12.5521Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_207_2"
        x="0.282349"
        y="0.831421"
        width="17.9119"
        height="31.2369"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_207_2"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_207_2"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const filledCircle = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="white" />
  </svg>
);

export const circle = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="14.5" stroke="white" strokeWidth="3" />
  </svg>
);
