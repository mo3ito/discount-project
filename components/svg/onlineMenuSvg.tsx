import React from "react";

export default function OnlineMenuSvg({className}:{className: string}) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#ffffff" height="60" rx="10" width="60" />
      <rect fill="#f1f3f4" height="44" width="36" x="12" y="8" />
      <path
        d="M48,53.5H12A1.5,1.5,0,0,1,10.5,52V8A1.5,1.5,0,0,1,12,6.5H48A1.5,1.5,0,0,1,49.5,8V52A1.5,1.5,0,0,1,48,53.5Zm-34.5-3h33V9.5h-33Z"
        fill="#aaadbf"
      />
      <circle cx="22" cy="18" fill="#ffe1a0" r="4" />
      <path
        d="M22,23.5A5.5,5.5,0,1,1,27.5,18,5.507,5.507,0,0,1,22,23.5Zm0-8A2.5,2.5,0,1,0,24.5,18,2.5,2.5,0,0,0,22,15.5Z"
        fill="#f29580"
      />
      <circle cx="22" cy="30" fill="#bec6f4" r="4" />
      <path
        d="M22,35.5A5.5,5.5,0,1,1,27.5,30,5.507,5.507,0,0,1,22,35.5Zm0-8A2.5,2.5,0,1,0,24.5,30,2.5,2.5,0,0,0,22,27.5Z"
        fill="#8d9cf4"
      />
      <circle cx="22" cy="42" fill="#c1f7fd" r="4" />
      <path
        d="M22,47.5A5.5,5.5,0,1,1,27.5,42,5.507,5.507,0,0,1,22,47.5Zm0-8A2.5,2.5,0,1,0,24.5,42,2.5,2.5,0,0,0,22,39.5Z"
        fill="#7bcdd1"
      />
      <path
        d="M42,19.5H32a1.5,1.5,0,0,1,0-3H42a1.5,1.5,0,0,1,0,3Z"
        fill="#aaadbf"
      />
      <path
        d="M42,31.5H32a1.5,1.5,0,0,1,0-3H42a1.5,1.5,0,0,1,0,3Z"
        fill="#aaadbf"
      />
      <path
        d="M42,43.5H32a1.5,1.5,0,0,1,0-3H42a1.5,1.5,0,0,1,0,3Z"
        fill="#aaadbf"
      />
      <path
        d="M12,53.5A1.5,1.5,0,0,1,10.5,52V8A1.5,1.5,0,0,1,12,6.5H48a1.5,1.5,0,0,1,0,3H13.5V52A1.5,1.5,0,0,1,12,53.5Z"
        fill="#eac8c9"
      />
    </svg>
  );
}
