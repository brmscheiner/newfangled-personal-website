import React from 'react';
import Logo from '../../components/Logo';
import Stub from '../../components/Stub';
import coastlines from '../../public/images/coastlines/coastlines_landscape.jpg';
import cuba from '../../public/images/cuba/cuba_landscape.jpg';
import squirrels from '../../public/images/squirrels/squirrels_landscape.jpg';

export default function Home() {
  return (
    <>
      <Logo />
      <Stub
        to="/squirrels"
        imageAlt="Squirrels"
        imageSrc={squirrels}
        title="How to raise squirrels (and what to do if you befriend one)"
        teaser="This past fall I raised two squirrels from infancy to adolescence. Nature may one day call upon you to do the same. Are you ready?"
        callToAction="See more..."
      />
      {/*<Stub*/}
      {/*to="/you-dont-need-d3"*/}
      {/*title="You don't need d3 pt. 1: creating a bar chart with vanilla react"*/}
      {/*teaser="Many developers depend on d3.js for data visualization, but code can quickly become messy and impenetrable. This is the first in a series of tutorials that will help you create interactive, production-ready charts using only React. Requires some algebra and geometry skills"*/}
      {/*callToAction="Read more..."*/}
      {/*/>*/}
      <Stub
        to="/coastlines"
        imageAlt="Dunes"
        imageSrc={coastlines}
        title="Looking closely at the Oregon coast, pt. 1"
        callToAction="See more..."
      />
      <Stub
        to="/use-dimensions"
        title="Hook of the moment: useDimensions"
        teaser="When React introduced hooks last year, I was excited to give them a shot. So far I've been very happy with the results. While the transition has been smooth overall, I was surprised to discover how annoying it was to work with the dimensions of a DOM node. If you have the same problem, this code snippet should save you some time."
        callToAction="Read more..."
      />
      <Stub
        to="/cuba"
        imageAlt="Cuba"
        imageSrc={cuba}
        title="Cuba"
        teaser="Photos from our visit to Cuba Christmas 2017"
        callToAction="See more..."
      />
    </>
  );
}
