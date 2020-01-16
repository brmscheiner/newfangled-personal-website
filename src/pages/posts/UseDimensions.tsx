import React from 'react';
import PostContainer from '../../components/PostContainer';
import CodeSample from '../../components/CodeSample';

export default function UseDimensions() {
  return (
    <PostContainer title="Hook of the moment: useDimensions">
      <p>
        When React introduced hooks last year, I was excited to give them
        a shot. So far I've been very happy with the results. While the
        transition has been smooth overall, I was surprised to discover how
        annoying it was to work with the dimensions of a DOM node. If you have
        the same problem, this code snippet should save you some time.
      </p>
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
      <p className="full mb-1">Sample usage:</p>
      <CodeSample>
        {`import React, { useRef } from 'react';
import { useDimensions } from '???';

const ref = useRef(null);
const { width, height } = useDimensions(ref);

// attach ref to some DOM element
return <div ref={ref} ...
`}
      </CodeSample>
      <p>Hopefully you find this helpful! Cheers</p>
    </PostContainer>
  );
}
