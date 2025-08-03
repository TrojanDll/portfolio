import React from "react";

type TProps = React.SVGProps<SVGSVGElement>;

const IconCorner: React.FC<TProps> = (props) => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.147 10.595V6.448H0V4.147H4.147V0H6.461V4.147H10.608V6.448H6.461V10.595H4.147Z"
        fill="#E84A4A"
      />
    </svg>
  );
};

export default IconCorner;
