import React from "react";
import '../styles/Button.css'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "primary" | "secondary" | "tertiary";
}

export default function Button({ children, onClick, variant }: ButtonProps) {
  return (
    <button onClick={onClick} className={`button button-${variant}`}>
      {children}
    </button>
  );
}
