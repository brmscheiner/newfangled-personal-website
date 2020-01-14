import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import '../styles/Stub.css';
import Button from './Button';

interface StubProps extends RouteComponentProps {
  title: string;
  to: string;
  imageAlt?: string;
  imageSrc?: string;
  teaser?: string;
  callToAction: string;
}

function Stub({
  history,
  imageAlt,
  imageSrc,
  teaser,
  title,
  callToAction,
  to,
}: StubProps) {
  const routeToPost = () => history.push(to);
  return (
    <div className="stub">
      <span className="stub-title">{title}</span>
      {imageSrc && <img className="stub-image" alt={imageAlt} src={imageSrc} />}
      {teaser && <span className="teaser">{teaser}</span>}
      <Button variant="teaser" onClick={routeToPost}>
        {callToAction}
      </Button>
    </div>
  );
}

export default withRouter(Stub);
