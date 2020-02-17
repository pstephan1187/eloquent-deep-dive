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

const andWheres = `Post::where('title', 'like', '%eloquent%')
    ->where('title', 'like', '%basics%')
    ->get();

Post::where([
  ['title', 'like', '%eloquent%'],
  ['title', 'like', '%basics%']
])->get();`;

const andWhereResults = `SELECT * FROM posts WHERE
  title LIKE '%eloquent%' AND
  title LIKE '%basics%'




`;

const orWheres = `Post::where('title', 'like', '%eloquent%')
    ->orWhere('title', 'like', '%basics%')
    ->get();`;

const orWhereResults = `SELECT * FROM posts WHERE
  title LIKE '%eloquent%' OR
  title LIKE '%basics%'`;

export default <Slide>
  <Notes>
    <ul>
      <li>You can chain where statements together.</li>
      <li>They can be called statically to start a new query or chained on any existing query.</li>
      <li>And Wheres</li>
      <li>Or Wheres</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="secondary">
    Where Clauses:
  </Heading>
  <Appear startValue={ { transform: 'translate(-100%)', opacity: 0 } } endValue={ { transform: 'translate(0%)', opacity: 1 } }>
    <div>
      <Text textAlign="left" textSize="18">And Wheres:</Text>
      <Layout>
        <Fill>
          <CodePane
            lang="php"
            textSize="18"
            source={ andWheres }
            margin="0 10px 20px 0"
          />
        </Fill>
        <Fill>
          <CodePane
            lang="sql"
            textSize="18"
            source={ andWhereResults }
            margin="0 0 20px 10px"
          />
        </Fill>
      </Layout>
    </div>
  </Appear>
  <Appear startValue={ { transform: 'translate(100%)', opacity: 0 } } endValue={ { transform: 'translate(0%)', opacity: 1 } }>
    <div>
      <Text textAlign="left" textSize="18">Or Wheres:</Text>
      <Layout>
        <Fill>
          <CodePane
            lang="php"
            textSize="18"
            source={ orWheres }
            margin="0 10px 20px 0"
          />
        </Fill>
        <Fill>
          <CodePane
            lang="sql"
            textSize="18"
            source={ orWhereResults }
            margin="0 0 20px 10px"
          />
        </Fill>
      </Layout>
    </div>
  </Appear>
</Slide>;
