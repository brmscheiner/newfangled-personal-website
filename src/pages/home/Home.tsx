import React from 'react';
import Logo from '../../components/Logo';
import Stub from '../../components/Stub';
import coastlines_3 from '../../public/images/coastlines/3.jpg';
import cuba_1 from '../../public/images/cuba/1.jpg';
import squirrels from '../../public/images/squirrels/1.jpg';

export default function Home() {
  return (
    <>
      <Logo />
      <Stub
        to="/squirrels"
        imageAlt="Squirrels"
        imageSrc={squirrels}
        title="Squiggles and Penelope's legacy"
        teaser="This past fall I was lucky enough to raise two squirrels from infancy to adolescence"
        callToAction="See more..."
      />
      <Stub
        to="/you-dont-need-d3"
        title="You don't need d3 pt. 1: creating a bar chart with vanilla react"
        teaser="Many developers depend on d3.js for data visualization, but code can quickly become messy and impenetrable. This is the first in a series of tutorials that will help you create interactive, production-ready charts using only React. Requires some algebra and geometry skills"
        callToAction="Read more..."
      />
      <Stub
        to="/coastlines"
        imageAlt="Dunes"
        imageSrc={coastlines_3}
        title="Looking closely at the Oregon coast, pt. 1"
        callToAction="See more..."
      />
      <Stub
        to="/use-dimensions"
        title="Hook of the moment: useDimensions"
        teaser="I wrote a React hook for working with the dimensions of a DOM node"
        callToAction="Read more..."
      />
      <Stub
        to="/cuba"
        imageAlt="Cuba"
        imageSrc={cuba_1}
        title="Cuba"
        teaser="Photos from our visit to Cuba Christmas 2017"
        callToAction="See more..."
      />
    </>
  );
}
