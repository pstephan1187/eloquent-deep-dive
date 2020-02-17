import React from 'react';
import {
  CodePane,
  Heading,
  Notes,
  Slide,
} from 'spectacle';

const accessors = `class Post extends Model {
  public function getUrlAttribute() {
    return \\URL::to("/posts/{$this->slug}");
  }

  public function getIsPublishedAttribute() {
    return !!$this->published_at;
  }
}

$url = $post->url;
$isPublished = $post->is_published;`;

export default <Slide>
  <Notes>
    <ul>
      <li>get + CamelCase + Attribute</li>
      <li>Allows you to mutate the value being returned from the model.</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="tertiary">
    Model Accessors:
  </Heading>
  <CodePane
    lang="php"
    source={ accessors }
    margin="0 auto 20px auto"
  />
</Slide>;
