import React from "react";

const EmploycaseLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    

    {/* briefcase body */}
    <rect
      x="2.2"
      y="6.4"
      width="19.6"
      height="12"
      rx="2.8"
      fill="#24262A"
      stroke="white"
      strokeWidth="0.4"
    />

    {/* small top gap showing background between handle and body:
        implemented by drawing a slightly narrower rounded rect (same color as background)
        to create the white/gray strip visible in the photo */}
    <rect
      x="8.1"
      y="4.55"
      width="7.8"
      height="1.1"
      rx="0.55"
      fill="#E8E8E9"
    />

    {/* handle (dark) */}
    <path
      d="M10.1 4.55c0-0.66 0.54-1.2 1.2-1.2h1.4c0.66 0 1.2 0.54 1.2 1.2v1.1h-3.8V4.55Z"
      fill="#24262A"
      stroke="white"
      strokeWidth="0.4"
    />

    {/* tie collar (left) */}
    <path
      d="M11.9 8.3l-3.0 1.1 1.4-2.0 1.6 0.9z"
      fill="#FFFFFF"
    />
    {/* tie collar (right) */}
    <path
      d="M12.1 8.3l3.0 1.1-1.4-2.0-1.6 0.9z"
      fill="#FFFFFF"
    />

    {/* small dark knot shape over the collars to match the photo */}
    <path
      d="M12 8.95l-0.65 0.9 0.65 0.55 0.65-0.55L12 8.95z"
      fill="#24262A"
    />

    {/* left white tie strip */}
    <path
      d="M10.5 9.6 9.5 17.0 11.0 17.0 12.0 10.3 10.5 9.6z"
      fill="#FFFFFF"
    />
    {/* right white tie strip */}
    <path
      d="M13.5 9.6 14.5 17.0 13.0 17.0 12.0 10.3 13.5 9.6z"
      fill="#FFFFFF"
    />

    {/* small triangular dark notch at the bottom center (briefcase color),
        matching the small triangular gap in the photo */}
    <path d="M11.85 17.0h0.3L12 18.4l-0.15-1.4z" fill="#24262A" />
  </svg>
);

export default EmploycaseLogo;
