import React from 'react';
import Gallery from '../../components/Gallery';
import squirrels_1 from '../../public/images/squirrels/1.jpg';
import squirrels_2 from '../../public/images/squirrels/2.jpg';
import squirrels_3 from '../../public/images/squirrels/3.jpg';
import squirrels_4 from '../../public/images/squirrels/4.jpg';

const sources = [
  {
    lowQualityUrl: squirrels_1,
    highQualityUrl: squirrels_1,
    name: 'Viñales Buggy',
  },
  {
    lowQualityUrl: squirrels_2,
    highQualityUrl: squirrels_2,
    name: 'Cloudstruck 1',
  },
  {
    lowQualityUrl: squirrels_3,
    highQualityUrl: squirrels_3,
    name: 'Cloudstruck 2',
  },
  {
    lowQualityUrl: squirrels_4,
    highQualityUrl: squirrels_4,
    name: 'Valle del Silencio 1',
  },
];

export default function CubaGallery() {
  return (
    <Gallery
      sources={sources}
      title="Squiggles and Penelope's legacy"
    >
      <p>
        I have to offer my sincere thanks to the Squirrel Refuge for their support
        throughout this process, and for the thousands of squirrels they
        rehabilitate and reintroduce to the wild every year. I would encourage
        anyone passionate about squirrels to reach out and lend a hand, you
        do not need any experience to get volunteer.
      </p>
    </Gallery>
  );
}
