import React from 'react';
import Gallery from './gallery';
import Breadcrumbs from '../common/breadcrumbs';
import coastlines_1 from '../../public/images/coastlines/1.jpg'
import coastlines_2 from '../../public/images/coastlines/2.jpg'
import coastlines_3 from '../../public/images/coastlines/3.jpg'
import coastlines_4 from '../../public/images/coastlines/4.jpg'
import coastlines_5 from '../../public/images/coastlines/5.jpg'
import coastlines_6 from '../../public/images/coastlines/6.jpg'
import coastlines_7 from '../../public/images/coastlines/7.jpg'
import coastlines_8 from '../../public/images/coastlines/8.jpg'
import coastlines_9 from '../../public/images/coastlines/9.jpg'
import coastlines_10 from '../../public/images/coastlines/10.jpg'

export default function Coastlines() {
  const sources = [
    coastlines_1,
    coastlines_2,
    coastlines_3,
    coastlines_4,
    coastlines_5,
    coastlines_6,
    coastlines_7,
    coastlines_8,
    coastlines_9,
    coastlines_10
  ];

  const crumbs = [
    {
      label: 'HOME',
      href: '/',
    },
    {
      label: 'WORK',
      href: '/WORK',
    },
    {
      label: 'PLAY',
      href: '/play',
    }
  ];

  return (
    <>
      <Gallery sources={sources} title="COASTLINES" />
      <Breadcrumbs crumbs={crumbs} containerClasses="flex-center space-below" />
    </>
  );
}