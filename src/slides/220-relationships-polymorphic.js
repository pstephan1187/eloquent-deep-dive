import React from 'react';
import {
  CodePane,
  Fill,
  Heading,
  Layout,
  Notes,
  Slide,
  Text,
} from 'spectacle';

const casting = `class Post extends Model {
  public function image() {
    return $this->morphMany(Image::class, imageable);
  }
}

class Page extends Model {
  public function image() {
    return $this->morphMany(Image::class, imageable);
  }
}

class Image extends Model {
  public function imageable() {
    return $this->morphTo();
  }
}`;

const tables = `- posts
  - id

- users
  - id

- images
  - id
  - imageable_id
  - imageable_type






`;

export default <Slide bgColor="secondary" controlColor="light" progressColor="light">
  <Notes>
    <ul>
      <li>Polymorphic: One Model can belong to any type of other model.</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="tertiary">
    Defining One-to-Many Polymorphic Relationships
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
