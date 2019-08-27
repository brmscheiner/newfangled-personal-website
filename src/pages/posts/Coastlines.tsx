import React from "react";
import Gallery from "../../components/Gallery";
import coastlines_1 from "../../public/images/coastlines/1.jpg";
import coastlines_2 from "../../public/images/coastlines/2.jpg";
import coastlines_3 from "../../public/images/coastlines/3.jpg";
import coastlines_4 from "../../public/images/coastlines/4.jpg";
import coastlines_5 from "../../public/images/coastlines/5.jpg";
import coastlines_6 from "../../public/images/coastlines/6.jpg";
import coastlines_8 from "../../public/images/coastlines/8.jpg";
import coastlines_9 from "../../public/images/coastlines/9.jpg";
import coastlines_10 from "../../public/images/coastlines/10.jpg";


const sources = [
  {
    lowQualityUrl: coastlines_1,
    highQualityUrl: coastlines_1,
    name: "Countless"
  },
  {
    lowQualityUrl: coastlines_2,
    highQualityUrl: coastlines_2,
    name: "Slopes",
  },
  {
    lowQualityUrl: coastlines_3,
    highQualityUrl: coastlines_3,
    name: "Dunes"
  },
  {
    lowQualityUrl: coastlines_4,
    highQualityUrl: coastlines_4,
    name: "Tributaries"
  },
  {
    lowQualityUrl: coastlines_5,
    highQualityUrl: coastlines_5,
    name: "Woven"
  },
  {
    lowQualityUrl: coastlines_6,
    highQualityUrl: coastlines_6,
    name: "Mars"
  },
  {
    lowQualityUrl: coastlines_8,
    highQualityUrl: coastlines_8,
    name: "Ancestors"
  },
  {
    lowQualityUrl: coastlines_9,
    highQualityUrl: coastlines_9,
    name: "Sticks & Stones"
  },
  {
    lowQualityUrl: coastlines_10,
    highQualityUrl: coastlines_10,
    name: "Substrates"
  }
];

export default function Coastlines() {
  return <Gallery sources={sources} title="Looking closely at the Oregon Coast, pt. 1" />;
}
