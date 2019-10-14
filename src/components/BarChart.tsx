import React, { useRef, useEffect, useState } from 'react';
import useDimensions from '../hooks/useDimensions';
import Bar from './Bar';

interface BarChartProps {
  data: DataProp[];
}

interface DataProp {
  label: string;
  value: number;
  color?: string;
}


export default function BarChart({ data }: BarChartProps) {
  const ref = useRef(null);
  const { width, height } = useDimensions(ref);
  const yMargin = 0.1 * width;

  if (data.length === 0) return null; // return chart only

  const renderedBarWidth = width / (data.length * 2);

  const maxValue = Math.max(...data.map(datum => datum.value));
  const minValue = Math.min(...data.map(datum => datum.value));

  console.log(minValue, maxValue)

  let totalUnits;
  let axisHeight;
  if (maxValue > 0 && minValue > 0) {
    totalUnits = maxValue;
    axisHeight = height - yMargin;
  } else if (maxValue < 0 && minValue < 0) {
    totalUnits = -minValue;
    axisHeight = (height * maxValue) / (maxValue + minValue);
  } else {
    totalUnits = maxValue - minValue;
    axisHeight = yMargin;
  }

  console.log(height, axisHeight)

  const pixelsPerUnit = totalUnits / (height - 2 * yMargin);

  return (
    <div ref={ref} style={{ height: '100%', width: '100%' }}>
      <svg style={{ height, width, border: '1px solid white' }}>
        {data.map((datum, i) => (
          <Bar
            label={datum.label}
            key={datum.label}
            x={renderedBarWidth + 2 * i * renderedBarWidth}
            height={pixelsPerUnit * datum.value}
            axisHeight={axisHeight}
            width={renderedBarWidth}
            color={datum.color || '#a345ff'}
          />
        ))}
        <line
          stroke="white"
          strokeWidth={3}
          x1={0}
          y1={axisHeight}
          x2={width}
          y2={axisHeight}
        />
      </svg>
    </div>
  );
}
