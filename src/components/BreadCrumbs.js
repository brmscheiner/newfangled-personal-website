import React, { Fragment } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const crumbs = [
  {
    label: "HOME",
    href: "/"
  },
  {
    label: "WORK",
    href: "/work"
  },
  {
    label: "PLAY",
    href: "/play"
  }
];

export default function BreadCrumbs(props) {
  return (
    <div className={props.containerClasses}>
      {_.map(crumbs, (crumb, i) => (
        <Fragment key={crumb.label}>
          {i !== 0 && <span className="white less-space-around">•</span>}
          <a className="white no-underline padding-below" href={crumb.href}>
            {crumb.label}
          </a>
        </Fragment>
      ))}
    </div>
  );
}

BreadCrumbs.defaultProps = {
  containerClasses: "",
  right: true,
  left: false
};

BreadCrumbs.propTypes = {
  containerClasses: PropTypes.string,
  right: PropTypes.bool,
  left: PropTypes.bool
};
