import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
// @ts-ignore
import shadesOfPurple from "react-syntax-highlighter/dist/esm/styles/hljs/shades-of-purple";

SyntaxHighlighter.registerLanguage("js", js);

interface CodeProps {
  children: React.ReactNode | string;
}

export default function CodeSample({ children }: CodeProps) {
  return (
    <SyntaxHighlighter
      customStyle={{ fontSize: 12, width: 400, overflowY: "hidden", marginBottom: 20 }}
      language="js"
      style={shadesOfPurple}
    >
      {children}
    </SyntaxHighlighter>
  );
}
