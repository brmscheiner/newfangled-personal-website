import React from "react";
import Logo from "../components/Logo";

interface GalleryProps {
  sources: string[];
  title?: string;
}

// accept loquality source and hq source
// accept comments after each image
// logo links back to home page
// little image clicks into big image

function Gallery({ sources, title }: GalleryProps) {
  const nodes = sources.map(source => {
    return (
      <div key={source} className="gallery-image-container">
        <img className="gallery-image" src={source} alt={source} />
      </div>
    );
  });

  return (
    <div className="gallery-container">
      <Logo className="post-logo" />
      <span className="gallery-title">{title}</span>
      {nodes}
    </div>
  );
}

export default Gallery;
