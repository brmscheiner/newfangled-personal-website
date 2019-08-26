import React from "react";

interface StubProps {
  title: string;
  imageAlt?: string;
  imageSrc?: string;
  teaser?: string;
}

export default function Stub({ title, imageAlt, imageSrc, teaser }: StubProps) {
  return (
    <div className="stub">
      <span className="title">{title}</span>
      {imageSrc && <img alt={imageAlt} src={imageSrc} width={400} />}
      <span className="teaser">{teaser}</span>
    </div>
  );
}
