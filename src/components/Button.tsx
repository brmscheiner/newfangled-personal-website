import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant: "primary" | "secondary" | "tertiary";
}

export default function Button({ children, onClick, variant }: ButtonProps) {
  return (
    <button onClick={onClick} className={`button button-${variant}`}>
      {children}
    </button>
  );
}
