import React from "react";

type TProps = React.SVGProps<SVGSVGElement>;

const IconCornerTopRight: React.FC<TProps> = (props) => {
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
        d="M0 1L8 1L8 9"
        stroke="#E84A4A"
        strokeWidth="2"
      />
    </svg>
  );
};

export default IconCornerTopRight;
