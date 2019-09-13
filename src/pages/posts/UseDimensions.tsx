import React from "react";
import PostContainer from "../../components/PostContainer";
import CodeSample from "../../components/CodeSample";

export default function UseDimensions() {
  return (
    <PostContainer title="Hook of the moment: useDimensions">
      <span className="full mb-2">
        When React premiered hooks earlier this year, I was super excited to
        stop writing class components. While the transition has been mostly
        smooth, I was surprised to discover how involved it was to work with the
        dimensions of a DOM node.
      </span>
      <span className="full mb-1">
        Most of the time I find myself working with refs, it's because I need to
        resize elements of a chart in response to window resize events. In most
        cases I have found hooks to significantly reduce the complexity and
        length of my components, but in this case the reverse was true. Luckily
        it was easy enough to build a generic hook and reuse it. Here's the
        code:
      </span>
      <CodeSample>
        {`import { useEffect, useState } from 'react';

export default function useDimensions(ref) {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const setDimensions = () => {
      if (ref && ref.current) {
        setWidth(ref.current.getBoundingClientRect().width);
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

  useEffect(() => {
    /* fix bug where browser reports incorrect dimensions until after first repaint */
    setTimeout(setDimensions, 0);

    if (ref && ref.current) {
      setWidth(ref.current.getBoundingClientRect().width);
      setHeight(ref.current.getBoundingClientRect().height);
    }

    window.addEventListener('resize', setDimensions);

    return () => {
      window.removeEventListener('resize', setDimensions);
    };
  }, []);

  return { width, height };
}`}
      </CodeSample>
      <span className="full mb-1">And here's how you would use it:</span>
      <CodeSample>
        {`import React, { useRef } from 'react';
import { useDimensions } from '???';

const ref = useRef(null);
const { width, height } = useDimensions(ref);

// attach ref to some DOM element
return <div ref={ref} ...
`}
      </CodeSample>
      <span className="full mb-3">
        Hopefully this helps someone out! I find this hook really useful for separating
        boilerplate code from the "meat" of my components.
      </span>
    </PostContainer>
  );
}
