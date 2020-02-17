import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Notes,
  Slide,
  Text,
} from 'spectacle';

const chunking = `$posts = Post::all();
foreach ($posts as $post) {
  //...
}

Post::chunk(200, function($posts) {
  foreach ($posts as $post) {
    //...
  }
});`;

const cursors = `$posts = Post::all();
foreach (Post::where(...)->cursor() as $post) {
  //...
}

Post::where(...)->cursor()->map(...)`;

export default <Slide bgColor="light">
  <Notes>
    <ul>
      <li>Chunking only selects a small portion at a time.</li>
      <li>You iterate of the chunks, then the models in each chunk.</li>
      <li>Cursors return lazy collections. The indivdual models in a lazy collection do not get pulled from the database until you retreive them or perform some action against them.</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="tertiary">
    Partial Loading:
  </Heading>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Chunking:</Text>
      <CodePane
        lang="php"
        source={ chunking }
        margin="0 auto 20px 0"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Cursors:</Text>
      <CodePane
        lang="php"
        source={ cursors }
      />
    </div>
  </Appear>
</Slide>;
