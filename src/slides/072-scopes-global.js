import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Notes,
  Slide,
  Text,
} from 'spectacle';

const globalScopes = `class AuthedUserScope implements Scope
{
    public function apply(query, $model)
    {
        $query->where('user_id', auth()->user()->id);
    }
}

class Post extends Model {
  protected static function boot() {
    parent::boot();

    static::addGlobalScope(new AuthedUserScope);
  }
}`;

const anonymousScopes = `class Post extends Model {
  protected static function boot() {
    parent::boot();

    static::addGlobalScope('published', function ($query) {
      $query->whereNotNull('published_at');
    });
  }
}`;

export default <Slide bgColor="secondary" controlColor="light" progressColor="light">
  <Notes>
    <ul>
      <li>Global scopes are automatically applied to all queries for this model.</li>
      <li>Global scopes can be anonymous or classes.</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="tertiary">
    Query Scopes (Global):
  </Heading>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Scope classes:</Text>
      <CodePane
        lang="php"
        source={ globalScopes }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Anonymous classes:</Text>
      <CodePane
        lang="php"
        source={ anonymousScopes }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
</Slide>;
