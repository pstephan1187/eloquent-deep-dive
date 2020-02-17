import React from 'react';
import {
  CodePane,
  Heading,
  Notes,
  Slide,
} from 'spectacle';

const mutators = `class Post extends Model {
  public function setSlugAttribute($value) {
    return;
  }

  public function setTitleAttribute($value) {
    $this->attributes['slug'] = \\Str::slug($value);
    $this->attributes['title'] = $value;
  }
}

$post = new Post();
$post->title = 'My Post';
$post->slug = 'something-random';
dump($post->toArray());
=> [
  "slug" => "my-post",
  "title" => "My Post",
]`;

export default <Slide>
  <Notes>
    <ul>
      <li>set + CamelCase + Attribute</li>
      <li>Allows you to mutate the value being saved to the model.</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="tertiary">
    Model Mutators:
  </Heading>
  <CodePane
    lang="php"
    source={ mutators }
    margin="0 auto 20px auto"
  />
</Slide>;
