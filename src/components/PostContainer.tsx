import React from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import '../styles/PostContainer.css';

interface PostContainerProps {
  children?: React.ReactNode;
  title: string;
}

function PostContainer({ children, title }: PostContainerProps) {
  return (
    <div className="container">
      <Logo small />
      <span className="title">{title}</span>
      {children}
      <Button href="https://forms.gle/R1VWR8W3HYCBZCaPA" variant="primary">Receive Emails When I Post</Button>
      <Button to="/" variant="secondary">
        Return Home
      </Button>
    </div>
  );
}

export default PostContainer;
