import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../components/Logo";
import "../styles/PostContainer.css";

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
      <Button variant="primary">
        Receive Emails When I Post
      </Button>
      <Button variant="secondary">
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  );
}

export default PostContainer;
