import React from 'react';
import {
  CodePane,
  Heading,
  Notes,
  Slide,
} from 'spectacle';

const localScopes = `class Post extends Model {
  public function scopePopular($query) {
    return $query->has('comments', '>=', 20);
  }

  public function scopePublishedSince($query, $date) {
    return $query->where('published_at', '>', $date);
  }

  public function scopeRecentlyPosted($query) {
    return $query->where('published_at', '>', Carbon::now()->subDays(30));
  }
}

Post::popular()->get();
Post::publishedSince('2020-01-17')->get();
Post::where('title', 'like', '%eloquent%')->recentlyPosted();`;

export default <Slide bgColor="secondary" controlColor="light" progressColor="light">
  <Notes>
    <ul>
      <li>Adding "scope" and capitalizing the first letter of the scope to get your method name.</li>
      <li>These can be chained just like any "where statement".</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="tertiary">
    Query Scopes (Local):
  </Heading>
  <CodePane
    lang="php"
    source={ localScopes }
    margin="20px auto"
  />
</Slide>;
