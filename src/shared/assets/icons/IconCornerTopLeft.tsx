import React from "react";

type TProps = React.SVGProps<SVGSVGElement>;

const IconCornerTopLeft: React.FC<TProps> = (props) => {
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
        d="M1 9L1 1L9 1"
        stroke="#E84A4A"
        strokeWidth="2"
      />
    </svg>
  );
};

export default IconCornerTopLeft;
