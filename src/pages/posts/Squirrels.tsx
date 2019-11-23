import React from "react";
import Gallery from "../../components/Gallery";
import squirrels_1 from "../../public/images/squirrels/1.jpg";
import squirrels_2 from "../../public/images/squirrels/2.jpg";
import squirrels_3 from "../../public/images/squirrels/3.jpg";
import squirrels_4 from "../../public/images/squirrels/4.jpg";

const sources = [
  {
    lowQualityUrl: squirrels_1,
    highQualityUrl: squirrels_1,
    name: "Viñales Buggy",
    description: "A horse and buggy in Viñales"
  },
  {
    lowQualityUrl: squirrels_2,
    highQualityUrl: squirrels_2,
    name: "Cloudstruck 1",
    description: "Above and below: clouds off the coast of Cayo Jutias"
  },
  {
    lowQualityUrl: squirrels_3,
    highQualityUrl: squirrels_3,
    name: "Cloudstruck 2",
    description: ""
  },
  {
    lowQualityUrl: squirrels_4,
    highQualityUrl: squirrels_4,
    name: "Valle del Silencio 1",
    description: "Above and below: a still night in the Valle del Silencio"
  },
];

export default function CubaGallery() {
  return <Gallery sources={sources} title="Squirrellsls" />;
}
