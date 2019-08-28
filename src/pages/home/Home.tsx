import React from "react";
import Logo from "../../components/Logo";
import Stub from "../../components/Stub";
import coastlines_3 from "../../public/images/coastlines/3.jpg";
import cuba_1 from "../../public/images/cuba/1.jpg";

export default function Home() {
  return (
    <>
      <Logo />
        <Stub
            to="/coastlines"
            imageAlt="Dunes"
            imageSrc={coastlines_3}
            title="Looking closely at the Oregon coast, pt. 1"
            teaser="A small series of photographs, the fruits of time spent exploring coast lines"
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
