import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  href?: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'teaser';
}

export default function Button({
  children,
  onClick,
  to,
  variant,
  href,
}: ButtonProps) {
  if (to) {
    return (
      <NavLink to={to} className={`button button-${variant}`}>
        {children}
      </NavLink>
    );
  }

  if (href) {
    return (
      <button onClick={onClick} className={`button button-${variant}`}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </button>
    );
  }

  return (
    <button onClick={onClick} className={`button button-${variant}`}>
      {children}
    </button>
  );
}
