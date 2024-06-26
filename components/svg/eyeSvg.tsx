import React from "react";

export default function EyeSvg({className}:{className:string}) {
  return (
    <svg
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="517.8"
          x2="0"
          y1="545.8"
        >
          <stop stop-color="#3889e9" />
          <stop offset="1" stop-color="#5ea5fb" />
        </linearGradient>
        <linearGradient
          y2="518.14"
          x2="0"
          y1="545.14"
          gradientUnits="userSpaceOnUse"
          id="0"
        >
          <stop stop-color="#197ff1" />
          <stop offset="1" stop-color="#21c6fb" />
        </linearGradient>
      </defs>
      <g
        transform="matrix(1.71427 0 0 1.71427-69.21 13.512)"
        enable-background="new"
      >
        <g transform="translate(-346.19-525.67)">
          <circle r="14" cy="531.8" cx="400.57" fill="url(#0)" />
          <circle
            cx="400.57"
            cy="531.8"
            r="14"
            fill="#5ea5fb"
            fill-opacity="0"
          />
        </g>
        <path
          d="m3511.58 243.75c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.493 0 16.893 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.493 0-16.893-81.4-174.9-258.6-296.1-464.2-296.1m0 94.46c116.1 0 210.09 94.09 210.09 210.09 0 116-94.09 210.15-210.09 210.15-116.1 0-210.09-94.15-210.09-210.15 0-116.1 94.09-210.09 210.09-210.09m0 75.54266a134.5 134.5 0 0 0 -134.4898 134.48979 134.5 134.5 0 0 0 134.4898 134.48979 134.5 134.5 0 0 0 134.4898 -134.48979 134.5 134.5 0 0 0 -134.4898 -134.48979"
          fill="#fff"
          fill-opacity=".873"
          transform="matrix(.01915 0 0 .01915-12.886-4.377)"
        />
      </g>
    </svg>
  );
}
