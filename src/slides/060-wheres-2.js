import React from 'react';
import {
  Appear,
  CodePane,
  Fill,
  Heading,
  Layout,
  Notes,
  Slide,
  Text,
} from 'spectacle';

const parameterGrouping = `Post::where('title', 'eloquent basics')
    ->orWhere(function($query){
      $query->where('title', 'like', '%eloquent%');
      $query->Where('title', 'like', '%basics%');
    })
    ->get();`;

const parameterGroupingResults = `SELECT * FROM posts
WHERE title = 'eloquent basics' OR (
    title LIKE '%eloquent%' AND
    title LIKE '%basics%'
)
`;

const whereExists = `Post::whereExists(function($query){
  $query->select(\\DB::raw(1))
        ->from('comments')
        ->whereRaw('comments.post_id = posts.id')
});`;

const whereExistsResults = `SELECT * FROM posts
WHERE EXISTS (
  SELECT 1 FROM comments
  WHERE comments.post_id = posts.id
)`;

export default <Slide>
  <Notes>
    <ul>
      <li>You can chain where statements within parenthesis.</li>
      <li>You can query for the existence of a related table row.</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="secondary">
    More Where Clauses:
  </Heading>
  <Appear startValue={ { transform: 'translate(100%)', opacity: 0 } } endValue={ { transform: 'translate(0%)', opacity: 1 } }>
    <div>
      <Text textAlign="left" textSize="18">Parameter Grouping:</Text>
      <Layout>
        <Fill>
          <CodePane
            lang="php"
            source={ parameterGrouping }
            margin="0 10px 20px 0"
          />
        </Fill>
        <Fill>
          <CodePane
            lang="sql"
            source={ parameterGroupingResults }
            margin="0 0 20px 10px"
          />
        </Fill>
      </Layout>
    </div>
  </Appear>
  <Appear startValue={ { transform: 'translate(-100%)', opacity: 0 } } endValue={ { transform: 'translate(0%)', opacity: 1 } }>
    <div>
      <Text textAlign="left" textSize="18">Wheres Exists:</Text>
      <Layout>
        <Fill>
          <CodePane
            lang="php"
            source={ whereExists }
            margin="0 10px 20px 0"
          />
        </Fill>
        <Fill>
          <CodePane
            lang="sql"
            source={ whereExistsResults }
            margin="0 0 20px 10px"
          />
        </Fill>
      </Layout>
    </div>
  </Appear>
</Slide>;
