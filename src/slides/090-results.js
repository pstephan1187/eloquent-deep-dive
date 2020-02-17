import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Notes,
  Slide,
  Text,
} from 'spectacle';

const singleResults = `Post::find($id);
=> App\\Post {
  id: "1",
  title: "Eloquent Basics",
  slug: "eloquent-basics",
  content: "...",
  created_at: "2020-02-15 15:40:06",
  updated_at: "2020-02-15 15:40:06",
}`;

const collectionResults = `Post::find($id);
=> Illuminate\\Database\\Eloquent\\Collection {
  all: [
    App\\User {
      id: "1",
      title: "Eloquent Basics",
      slug: "eloquent-basics",
      content: "...",
      created_at: "2020-02-15 15:40:06",
      updated_at: "2020-02-15 15:40:06",
    },
  ],
}`;

export default <Slide bgColor="light">
  <Notes>
    <ul>
      <li>Model instances can be treated like normal objects where the attributes are like object properties.</li>
      <li>When a query returns multiple models, a collection of model instances is returned.</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="tertiary">
    Returned Results:
  </Heading>
  <Appear startValue={ { transform: 'scale(0)', opacity: 0 } } endValue={ { transform: 'scale(1)', opacity: 1 } }>
    <div>
      <Text textAlign="left" textSize="18">Single Models:</Text>
      <CodePane
        lang="php"
        source={ singleResults }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear startValue={ { transform: 'scale(0)', opacity: 0 } } endValue={ { transform: 'scale(1)', opacity: 1 } }>
    <div>
      <Text textAlign="left" textSize="18">Collection of Models:</Text>
      <CodePane
        lang="php"
        source={ collectionResults }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
</Slide>;
