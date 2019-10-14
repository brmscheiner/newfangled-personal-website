import React from 'react';
import Logo from '../../components/Logo';
import Stub from '../../components/Stub';
import coastlines_3 from '../../public/images/coastlines/3.jpg';
import cuba_1 from '../../public/images/cuba/1.jpg';

export default function Home() {
  return (
    <>
      <Logo />
      <Stub
        to="/bar-chart-pt-1"
        title="You don't need d3 pt. 1: creating a bar chart with vanilla react"
        teaser="Many developers depend on d3.js for data visualization, but code can quickly become messy and impenetrable. This is the first in a series of tutorials that will help you create interactive, production-ready charts using only React. Requires some algebra and geometry skills"
      />
      <Stub
        to="/coastlines"
        imageAlt="Dunes"
        imageSrc={coastlines_3}
        title="Looking closely at the Oregon coast, pt. 1"
        teaser="A small series of photographs, the fruits of time spent exploring coast lines"
      />
      <Stub
        to="/use-dimensions"
        title="Hook of the moment: useDimensions"
        teaser="I wrote a React hook for working with the dimensions of a DOM node"
      />
      <Stub
        to="/cuba"
        imageAlt="Cuba"
        imageSrc={cuba_1}
        title="Vacation in Cuba"
        teaser="Turns out Cuba's not so hard to visit! At least that was the case in Winter 2017"
      />
    </>
  );
}
