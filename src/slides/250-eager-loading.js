import React from 'react';
import {
  Appear,
  CodePane,
  Fill,
  Heading,
  Layout,
  Slide,
  Text,
} from 'spectacle';

const eagerLoadingBad = `$posts = Post::all();

foreach ($posts as $post) {
  //...
  $post->comments;
  //...
}

$users = User::all();

foreach ($users as $user) {
  foreach ($user->posts as $post) {
    $post->comments;
  }
}`;

const eagerLoadingGood = `$posts = Post::with('comments')->get();

foreach ($posts as $post) {
  $post->comments;
}

$users = User::all();
$users->load('posts.comments');

foreach ($users as $user) {
  foreach ($user->posts as $post) {
    $post->comments;
  }
}
`;

export default <Slide>
  <Heading fit caps textColor="tertiary">
    Eager Loading:
  </Heading>
  <Appear>
    <div margin="0 auto 20px auto">
      <Layout>
        <Fill>
          <div style={ { padding: '0 10px 20px 0' } }>
            <Text textAlign="left" textSize="18">N+ Issue:</Text>
            <CodePane
              lang="php"
              source={ eagerLoadingBad }
            />
          </div>
        </Fill>
        <Fill>
          <div style={ { padding: '0 0 20px 10px' } }>
            <Text textAlign="left" textSize="18">Eager Loading:</Text>
            <CodePane
              lang="php"
              source={ eagerLoadingGood }
            />
          </div>
        </Fill>
      </Layout>
    </div>
  </Appear>
</Slide>;
