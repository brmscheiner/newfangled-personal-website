import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../components/Logo";

interface Source {
  lowQualityUrl: string;
  highQualityUrl: string;
  name: string;
  description?: string;
}

interface GalleryProps extends RouteComponentProps {
  sources: Source[];
  title?: string;
  children?: React.ReactNode;
}

// accept comments after each image
// little image clicks into big image

function Gallery({ children, history, sources, title }: GalleryProps) {
  const nodes = sources.map(source => {
    const { name, lowQualityUrl, highQualityUrl, description } = source;
    return (
      <div key={name} className="gallery-image-container">
        <img className="gallery-image" src={lowQualityUrl} alt={name} />
        {description}
      </div>
    );
  });

  return (
    <div className="gallery-container">
      <Logo className="post-logo" />
      <span className="gallery-title">{title}</span>
      {nodes}
      {children}
      <Button onClick={() => {}} variant="primary">
        Receive Emails When I Post
      </Button>
      <Button onClick={() => history.push("/")} variant="secondary">
        Return Home
      </Button>
    </div>
  );
}

export default withRouter(Gallery);
