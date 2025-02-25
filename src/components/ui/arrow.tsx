import * as React from "react";

const sizeMappings = {
  sm: { width: 20, height: 25 },
  md: { width: 30, height: 38 },
  lg: { width: 40, height: 50 },
};

export interface BaseArrowProps extends React.SVGAttributes<SVGSVGElement> {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Arrow = React.forwardRef<SVGSVGElement, BaseArrowProps>(
  ({ className = "", size = "md", ...props }, ref) => {
    const { width, height } = sizeMappings[size];

    return (
      <svg
        ref={ref}
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 23.2480239 25.4569833"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <g
          id="Arrows"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            id="Line"
            d="M4.56970679,1.00475184e-14 L8.999729,9.03465014 L5.05489944,9.00379457 C5.51501125,13.4274253 6.79697325,16.8291326 8.88875334,19.2200662 C12.1629843,22.9625576 16.7524873,24.6997598 22.7032227,24.429826 L23.2027091,24.4071686 L23.2480239,25.4061413 L22.7485375,25.4287988 C16.5076846,25.7118927 11.6215626,23.8624153 8.13613191,19.8785197 C5.87696746,17.2962635 4.51864985,13.6647776 4.04883615,8.99549981 L-1.0658141e-14,8.96480785 L4.56970679,1.00475184e-14 Z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </g>
      </svg>
    );
  }
);

export const ArrowTwist = React.forwardRef<SVGSVGElement, BaseArrowProps>(
  ({ className = "", size = "md", ...props }, ref) => {
    const { width, height } = sizeMappings[size];

    return (
      <svg
        ref={ref}
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 12.3897354 33.4159069"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <g
          id="Arrows"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            id="Line"
            d="M3.65057855,-9.1038288e-15 L12.3897354,4.98769858 L8.96332534,7.27533775 C10.502364,11.7382569 9.1348863,15.7786762 4.91872907,19.3026313 C-0.977991875,24.2312378 -0.236462899,28.4087661 7.28147014,32.2979788 L7.72556385,32.5277195 L7.26608252,33.4159069 L6.82198881,33.1861663 C-1.3015505,28.9836584 -2.19579194,23.9457987 4.27741863,18.5353498 C8.1072818,15.3342676 9.36363132,11.8020379 8.10072683,7.85050782 L4.90391382,9.98394465 L3.65057855,-9.1038288e-15 Z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </g>
      </svg>
    );
  }
);

Arrow.displayName = "Arrow";
ArrowTwist.displayName = "ArrowTwist";
