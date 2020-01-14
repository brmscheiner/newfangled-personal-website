import React from 'react';
import PostContainer from '../../components/PostContainer';

export default function NeedD3() {
  return (
    <PostContainer title="You don't need d3">
      <p>
        When frontend developers think data visualization their mind usually
        jumps to d3. And for good reason: beautiful lines, curves, bars, pies,
        maps, sunbursts and more are just a google search away. Most examples
        are fewer than 100 lines of code! It's easy enough to copy and paste
        code straight into your app, spend a few minutes wrestling with the
        data, tweak the styles, and call it a day.
      </p>
      <p>
        However, if you work on a large-scale application, this strategy can
        quickly create some uncomfortable situations. Most sufficiently large
        applications are built in React, Angular, or Vue. To the developers who
        program within these frameworks on a daily basis, the framework is much
        more than just a collection of parsers and functions that you can
        import.
      </p>
      <p>
        These frameworks represent opinions about how presentation logic and
        business logic should be handled, how data should become DOM, and how
        different parts of an application can stay in sync. They are a common
        vocabulary, an ecosystem of associated tools, a community, and an
        entirely unique way of thinking. In short, every mature framework is a
        culture.
      </p>
      <p>
        Let's get to the point. We don't normally think of it as such, but d3 is
        just as much of a framework as React, Angular, or Vue. d3 has a strong
        community with create unique tools, with a code style and lexicon all
        their own. From a technical perspective, d3 developers have patterns for
        separating presentational logic from business logic and strong opinions
        on how data should become DOM. It is entirely possible to create a web
        app of any scale written in d3 (although probably not a good idea).
      </p>
      <p>
        Pretend that you are working on an e-commerce app written in React, and
        one day your coworker mentions off the cuff that he's gonna do the
        billing section in Angular because he thinks it'll be easier to make the
        forms. Would you be happy with that with that? Of course not!
        Collaboration becomes restricted to those already know Angular or
        dedicate the time to learn it, and even then switching gears levies a
        mental burden on whoever gets involved. Moreover, interactions between the
        billing section and the rest of the site become very difficult to reason
        about.
      </p>
      <p>
        There is a reason we don't use two frameworks at the same time. Using d3
        inside of Vue causes the exact same problems as using Angular inside
        of React, or React inside of Vue. // restate problems
      </p>
      <p>
        My suspicion is that most experienced developers are aware of these
        issues. Many have been affected first hand. But d3 continues to find its
        way into
      </p>
      <p>
        More and more organizations are beginning to see the value in beautiful
        visualizations that make us stop and stare. And in slick, interactive
        visualizations that engage us. But bringing these creations to life is
        no easy task, especially if we seek to liberate ourselves from charting
        libraries and work with React alone. I think creating an interactive bar
        chart is a great first adventure, because while the task is not
        overwhelmingly complex it is more nuanced than it might seem at first
        glance.
      </p>
    </PostContainer>
  );
}
