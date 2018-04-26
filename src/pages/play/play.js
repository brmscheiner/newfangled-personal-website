import React from 'react';
import _ from 'lodash';
import Breadcrumbs from '../common/breadcrumbs';
import { Link } from 'react-router-dom';
import NeonSign from '../common/neonSign';
import cuba_1 from '../../images/cuba/1.jpg'
import coastlines_1 from '../../images/coastlines/1.jpg'

const crumbs = [
  {
    label: 'HOME',
    href: '/',
  },
  {
    label: 'WORK',
    href: '/work',
  },
  {
    label: 'PLAY',
    href: '/play',
  }
];

const galleries = [
  {
    image: cuba_1,
    href: '/cuba',
    description: 'Shot in Cuba',
  },
  {
    image: coastlines_1,
    href: '/coastlines',
    description: 'Shot on the Pacific coast',
  }
];

function Play() {
  const galleryLinks = _.map(galleries, (gallery) => {
    const imageClasses = `Gallery-thumbnail`;
    return (
      <a
        href={gallery.href}
        key={gallery.href}
        className="Gallery-thumbnail-container bordered no-underline"
      >
        <img
          src={gallery.image}
          className={imageClasses}
          alt={gallery.description}
        />
        <span className="white centered">{ gallery.description }</span>
      </a>
    )
  });

  return (
    <div className="Play-container">
      <div className="centered-text space-below space-above">
        <NeonSign text="AMATEUR PHOTOGRAPHY"/>
      </div>

      <div className="flex-spaced">
        { galleryLinks }
      </div>

      <Breadcrumbs crumbs={crumbs} containerClasses="flex-center space-above space-below" />
    </div>
  );
}

export default Play;
