import React, { useEffect, useState } from "react";

interface BarProps {
  color: string;
  label: string;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  height: number;
  width: number;
  axisHeight: number;
  x: number;
}

export default function Bar(props: BarProps) {
  const {
    color,
    onMouseOver,
    onMouseLeave,
    width,
    x,
    height,
    axisHeight,
    ...rest
  } = props;

  const [currentHeight, setCurrentHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentHeight(currentHeight);
    }, 0);
  }, [height]);

  const containerTransform = { transform: `translateX(${x}px)` };

  console.log(height, currentHeight);

  const rectDimensionProps = {
    x: x -0.5 * width,
    y: Math.min(axisHeight, currentHeight),
    height: Math.max(axisHeight, currentHeight),
    width,
  };

  const rectClassNames = `bar barTransition`;

  return (
    <g>
      <g className="barContainer">
        <rect
          className="barTransition"
          fill="white"
          {...rectDimensionProps}
          {...rest}
        />
        <rect
          className={rectClassNames}
          fill={color}
          stroke={color}
          {...rectDimensionProps}
          {...rest}
        />
      </g>
      <g
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        <rect opacity={0} {...rectDimensionProps} />
      </g>
    </g>
  );
}
