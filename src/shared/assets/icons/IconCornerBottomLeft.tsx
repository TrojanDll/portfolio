import React from "react";

type TProps = React.SVGProps<SVGSVGElement>;

const IconCornerBottomLeft: React.FC<TProps> = (props) => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 8L1 8L0.999999 6.99382e-07"
        stroke="#E84A4A"
        stroke-width="2"
      />
    </svg>
  );
};

export default IconCornerBottomLeft;
