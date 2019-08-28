import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import '../styles/Stub.css'

interface StubProps extends RouteComponentProps {
  title: string;
  to: string;
  imageAlt?: string;
  imageSrc?: string;
  teaser?: string;
}

function Stub({ history, imageAlt, imageSrc, teaser, title, to }: StubProps) {
  const routeToPost = () => history.push(to);
  return (
    <div className="stub">
      <span className="stub-title" onClick={routeToPost}>
        {title}
      </span>
      {imageSrc && (
        <img
          onClick={routeToPost}
          className="stub-image"
          alt={imageAlt}
          src={imageSrc}
        />
      )}
      <span className="teaser">{teaser}</span>
    </div>
  );
}

export default withRouter(Stub);
