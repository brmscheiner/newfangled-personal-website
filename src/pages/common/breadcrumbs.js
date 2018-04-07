import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default function Breadcrumbs(props) {
  const crumbs = _.map(props.crumbs, (crumb, i) => {
    return (
      <React.Fragment key={crumb.label}>
        { i !== 0 && <span className="white less-space-around">•</span> }
        <a className="white no-underline padding-below" href={crumb.href}>{ crumb.label }</a>
      </React.Fragment>)
  });

  return (<div className={props.containerClasses}>
    { crumbs }
  </div>)
}

Breadcrumbs.defaultProps = {
  containerClasses: '',
  right: true,
  left: false,
};

Breadcrumbs.propTypes = {
  containerClasses: PropTypes.string,
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  right: PropTypes.bool,
  left: PropTypes.bool,
};