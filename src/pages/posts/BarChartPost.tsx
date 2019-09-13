import React from 'react';
import PostContainer from '../../components/PostContainer';
import CodeSample from '../../components/CodeSample';
import BarChart from '../../components/BarChart';
import mockData from './BarChartPost/mockData';

export default function BarChartPost() {
  return (
    <PostContainer title="You don't need d3 pt. 1: creating a bar chart with vanilla react">
      <span className="full mb-2">
        When frontend developers think data visualization they usually think d3.
        And for good reason: example code for beautiful line charts, bar charts,
        pies, bubble charts, choropleths, treemaps, sunbursts, and more are just
        a google search away and for the most part clock in under 100 lines.
        It's easy enough to copy and paste code straight into your app, wrestle
        the data, mess with the styles, and call it a day.
      </span>
      <span className="full mb-1">
        However, this strategy quickly finds its limits. If you
      </span>
      <span className="full mb-1">
        More and more organizations are beginning to see the value in beautiful
        visualizations that make us stop and stare. And in slick, interactive
        visualizations that engage us. But bringing these creations to life is
        no easy task, especially if we seek to liberate ourselves from charting
        libraries and work with React alone. I think creating an interactive bar
        chart is a great first adventure, because while the task is not
        overwhelmingly complex it is more nuanced than it might seem at first
        glance.
      </span>
      <span className="full mb-1">
        First thing's first, let's set clear expectations for what we want to
        achieve. Let's create a responsive bar chart with a hover effects,
        support for negative values, and a sexy start-up animation. Here is how
        the data coming in will be structured:
      </span>
      <CodeSample>
        {`const mockData = [
  {
    label: 'China',
    value: 5,
  },
  {
    label: 'Korea',
    value: 5,
  },
  {
    label: 'Japan',
    value: 5,
  },
  {
    label: 'Uk',
    value: -5,
  },
  {
    label: 'USA',
    value: 5,
  },
]`}
      </CodeSample>
      <span className="full mb-1">
        Let's start with the svg element. We want the chart to fill its parent
        container and resize when necessary. For that, let's borrow the
        useDimensions hook I wrote about in a previous post.
      </span>
      <CodeSample>
        {`import React, { useRef } from 'react';
import useDimensions from '???';

export default function BarChart({ data }) {
  const ref = useRef(null);
  const { width, height } = useDimensions(ref);

  return <div ref={ref} style={{ height: '100%', width: '100%' }}>
    <svg style={{ height, width, border: '1px solid white' }}>
  </div>
`}
      </CodeSample>
      <span className="full mb-1">
        Now the coordinates of all of the elements we add to the svg can be a
        function of width and height. That way when the window is resized the
        chart will recalculate the dimensions and sizes of the bars, labels, and
        axis. There are three things we will need to calculate: the width of
        each bar, where to place the x-axis, and the number of pixels each unit
        represents.
      </span>
      <CodeSample>
        {`const renderedBarWidth = width / (data.length * 2);

const maxValue = Math.max(...data.map(datum => datum.value));
const minValue = Math.min(...data.map(datum => datum.value));

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

const pixelsPerUnit = totalUnits / (height - 2 * yMargin);`}
      </CodeSample>
      <BarChart data={mockData} />
    </PostContainer>
  );
}
