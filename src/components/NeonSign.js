import React from 'react';
import PropTypes from 'prop-types';

export default function NeonSign(props) {
  const { children, color, onClick, title } = props

  const style = {
    padding: 3,
    border: '1px solid '.concat(color),
    color: color,
    cursor: onClick ? 'pointer' : 'default',
    margin: 2,
    textTransform: 'uppercase'
  };

  return (
    <span style={style} onClick={onClick} title={title}>
      {children}
    </span>
  );
}

NeonSign.defaultProps = {
  color: '#FFEB3B',
  onClick: null,
  title: null
};

NeonSign.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
};
