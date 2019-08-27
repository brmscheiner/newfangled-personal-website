import React from "react";
import Logo from "../../components/Logo";
import Stub from "../../components/Stub";
import coastlines_3 from "../../public/images/coastlines/3.jpg";
import cuba_1 from "../../public/images/cuba/1.jpg";

export default function Home() {
  return (
    <>
      <Logo className="home-logo" />
        <Stub
            to="/coastlines"
            imageAlt="Dunes"
            imageSrc={coastlines_3}
            title="Looking closely at the Oregon coast, pt. 1"
            teaser="Coastlines are textural Meccas. This photo project is my little tribute to them."
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
