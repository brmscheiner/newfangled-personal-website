import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Logo.css';
import darkLogo from '../public/images/darkLogo.svg';

interface LogoProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  small?: boolean;
}

function Logo(props: LogoProps) {
  const { className, small, ...rest } = props;
  const logoClassName = small ? 'logo logo-small' : 'logo';

  if (small) {
    return (
      <NavLink to="/">
        <img
          src={darkLogo}
          alt="scheinerbock.com logo"
          className={`${logoClassName} ${className}`}
          {...rest}
        />
      </NavLink>
    );
  }

  return (
    <img
      src={darkLogo}
      alt="scheinerbock.com logo"
      className={`${logoClassName} ${className}`}
      {...rest}
    />
  );
}

export default Logo;
