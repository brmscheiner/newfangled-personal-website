import React from "react";
import _ from "lodash";
import BreadCrumbs from "./BreadCrumbs";
import NeonSign from "./NeonSign";
import cuba_1 from "../public/images/cuba/1.jpg";
import coastlines_1 from "../public/images/coastlines/1.jpg";

const galleries = [
  {
    image: cuba_1,
    href: "/cuba",
    description: "CUBA"
  },
  {
    image: coastlines_1,
    href: "/coastlines",
    description: "COASTLINES"
  }
];

function CardPage() {
  const galleryLinks = _.map(galleries, gallery => {
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
        <span className="white centered clickable">{gallery.description}</span>
      </a>
    );
  });

  return (
    <div className="Play-container">
      <div className="centered-text space-below space-above">
        <NeonSign>Amateur Photography</NeonSign>
      </div>

      <div className="flex-spaced">{galleryLinks}</div>

      <p className="small white centered-text more-space-below">
        This site was written in React. The source code is{" "}
        <a
          className="white"
          href="https://github.com/brmscheiner/newfangled-personal-website"
        >
          freely available on Github
        </a>
        .
      </p>

      <BreadCrumbs containerClasses="flex-center space-above space-below" />
    </div>
  );
}

export default CardPage;
