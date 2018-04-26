import React from 'react';
import Gallery from './gallery';
import Breadcrumbs from '../common/breadcrumbs';
import cuba_1 from '../../images/cuba/1.jpg'
import cuba_2 from '../../images/cuba/2.jpg'
import cuba_3 from '../../images/cuba/3.jpg'
import cuba_4 from '../../images/cuba/4.jpg'
import cuba_5 from '../../images/cuba/5.jpg'

export default function CubaGallery() {
  const sources = [
    cuba_1,
    cuba_2,
    cuba_3,
    cuba_4,
    cuba_5
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
    <React.Fragment>
      <Gallery sources={sources} title="CUBA" />
      <Breadcrumbs crumbs={crumbs} containerClasses="flex-center space-below" />
    </React.Fragment>
  );
}