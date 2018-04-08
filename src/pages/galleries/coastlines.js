import React from 'react';
import Gallery from './gallery';
import Breadcrumbs from '../common/breadcrumbs';
import coastlines_1 from '../../images/coastlines/1.jpg'
import coastlines_2 from '../../images/coastlines/2.jpg'
import coastlines_3 from '../../images/coastlines/3.jpg'
import coastlines_4 from '../../images/coastlines/4.jpg'
import coastlines_5 from '../../images/coastlines/5.jpg'
import coastlines_6 from '../../images/coastlines/6.jpg'
import coastlines_7 from '../../images/coastlines/7.jpg'
import coastlines_8 from '../../images/coastlines/8.jpg'
import coastlines_9 from '../../images/coastlines/9.jpg'
import coastlines_10 from '../../images/coastlines/10.jpg'

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
      label: 'PLAY',
      href: '#',
    }
  ];

  return (
    <React.Fragment>
      <Gallery sources={sources} title="COASTLINES" />
      <Breadcrumbs crumbs={crumbs} containerClasses="flex-center space-below" />
    </React.Fragment>
  );
}