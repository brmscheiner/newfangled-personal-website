import React, { Component } from "react";
import ubnt from "../../public/images/unifi.png";
import mp from "../../public/images/mp/psych-jump.jpg";
import frb from "../../public/images/frb.svg";
import NeonSign from "../../components/NeonSign";

const items = [
  {
    name: "Ubiquiti Networks",
    href: "/ubiquiti",
    image: ubnt
  },
  {
    name: "Motorized Precision",
    href: "/motorized",
    image: mp
  },
  {
    name: "Federal Reserve Board of Governors",
    href: "/fed",
    image: frb
  }
];

class Work extends Component {
  render() {
    return (
      <div className="Play-container">
        <div className="centered-text space-below space-above">
          <NeonSign>Work</NeonSign>
        </div>
        <div className="flex-spaced">
          {items.map(item => (
            <a
              href={item.href}
              key={item.href}
              className="Gallery-thumbnail-container bordered no-underline"
            >
              <img
                src={item.image}
                className="Gallery-thumbnail"
                alt={item.name}
              />
              <span className="white centered clickable">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Work;
