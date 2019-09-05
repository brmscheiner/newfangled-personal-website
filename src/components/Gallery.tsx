import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import PostContainer from "../components/PostContainer";
import "../styles/Gallery.css";

interface Source {
  lowQualityUrl: string;
  highQualityUrl: string;
  name: string;
  description?: string;
}

interface GalleryProps extends RouteComponentProps {
  sources: Source[];
  title: string;
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
      <PostContainer title={title}>
        {nodes}
      </PostContainer>
  );
}

export default withRouter(Gallery);
