import React from "react";
import Gallery from "../../components/Gallery";
import cuba_1 from "../../public/images/cuba/1.jpg";
import cuba_2 from "../../public/images/cuba/2.jpg";
import cuba_3 from "../../public/images/cuba/3.jpg";
import cuba_4 from "../../public/images/cuba/4.jpg";
import cuba_5 from "../../public/images/cuba/5.jpg";

const sources = [
  {
    lowQualityUrl: cuba_1,
    highQualityUrl: cuba_1,
    name: "Viñales Buggy",
    description: "Viñales"
  },
  {
    lowQualityUrl: cuba_2,
    highQualityUrl: cuba_2,
    name: "Jutias I",
    description: "Cayo Jutias"
  },
  {
    lowQualityUrl: cuba_3,
    highQualityUrl: cuba_3,
    name: "Jutias II",
    description: "Cayo Jutias II"
  },
  {
    lowQualityUrl: cuba_4,
    highQualityUrl: cuba_4,
    name: "Valle del Silencio",
    description: "Valle del Silencio"
  },
  {
    lowQualityUrl: cuba_5,
    highQualityUrl: cuba_5,
    name: "Valle del Silencio II",
    description: "Valle del Silencio II"
  }
];

export default function CubaGallery() {
  return <Gallery sources={sources} title="Cuba" />;
}
