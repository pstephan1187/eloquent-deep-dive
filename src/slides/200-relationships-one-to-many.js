import React from 'react';
import {
  CodePane,
  Fill,
  Heading,
  Layout,
  Slide,
  Text,
} from 'spectacle';

const casting = `class Post extends Model {
  public function comments() {
    return $this->hasMany(Comment::class);
  }
}

class Comment extends Model {
  public function post() {
    return $this->belongsTo(Post::class);
  }
}`;

const tables = `- posts
  - id

- comments
  - id
  - post_id




`;

export default <Slide bgColor="secondary" controlColor="light" progressColor="light">
  <Heading fit caps textColor="tertiary">
    Defining One-to-Many Relationships
  </Heading>
  <Layout>
    <Fill>
      <div style={ { margin: '20px 10px 20px 0' } }>
        <Text textAlign="left" textSize="18">Models:</Text>
        <CodePane
          lang="php"
          source={ casting }
        />
      </div>
    </Fill>
    <Fill>
      <div style={ { margin: '20px 0 20px 10px' } }>
        <Text textAlign="left" textSize="18">Tables:</Text>
        <CodePane
          lang="php"
          source={ tables }
        />
      </div>
    </Fill>
  </Layout>
</Slide>;
