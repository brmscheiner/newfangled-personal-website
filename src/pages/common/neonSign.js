import React from 'react';
import PropTypes from 'prop-types';

export default function NeonSign(props) {
  const style = {
    padding: 3,
    border: '1px solid '.concat(props.color),
    color: props.color,
    cursor: props.onClick ? 'pointer' : 'default',
    marginTop: 3,
    marginBottom: 3,
  };

  return (
    <span
      style={style}
      onClick={props.onClick}
      title={props.title}
    >
      { props.text }
    </span>
  );
}

NeonSign.defaultProps = {
  color: '#FFEB3B',
  onClick: null,
  title: null,
};

NeonSign.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
};