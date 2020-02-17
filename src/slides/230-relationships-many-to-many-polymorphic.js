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
  public function image() {
    return $this->morphedByMany(Image::class, 'taggable');
  }
}

class Page extends Model {
  public function image() {
    return $this->morphedByMany(Image::class, 'taggable');
  }
}

class Tag extends Model {
  public function imageable() {
    return $this->morphToMany(Tag::class, 'taggable');
  }
}`;

const tables = `- posts
  - id

- users
  - id

- tags
  - id

- taggables
  - tag_id
  - post_id
  - user_id



`;

export default <Slide bgColor="secondary" controlColor="light" progressColor="light">
  <Heading fit caps textColor="tertiary">
    Defining Many-to-Many Polymorphic Relationships
  </Heading>
  <Layout>
    <Fill>
      <div style={ { margin: '20px 10px 20px 0'}}>
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
