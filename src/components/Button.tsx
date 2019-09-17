import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  variant: 'primary' | 'secondary' | 'tertiary';
}

export default function Button({
  children,
  onClick,
  to,
  variant,
}: ButtonProps) {
  if (to) {
    return (
      <NavLink to={to} className={`button button-${variant}`}>
        {children}
      </NavLink>
    );
  }

  return (
    <button onClick={onClick} className={`button button-${variant}`}>
      {children}
    </button>
  );
}
