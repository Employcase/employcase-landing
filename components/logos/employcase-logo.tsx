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

    {/* small top gap showing background between handle and body */}
    <rect
      x="7.5"
      y="5.2"
      width="9"
      height="0.8"
      rx="0.4"
      fill="#E8E8E9"
    />

    {/* handle (dark) - wider arc shape */}
    <path
      d="M7.5 6.0 Q7.5 2.5 12 2.5 Q16.5 2.5 16.5 6.0"
      fill="none"
      stroke="#24262A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7.5 6.0 Q7.5 2.5 12 2.5 Q16.5 2.5 16.5 6.0"
      fill="none"
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
