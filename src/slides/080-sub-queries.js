import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Notes,
  Slide,
  Text,
} from 'spectacle';

const subselect = `// Add the last login date as "last_login"
User::addSelect(['last_login' => Login::select('created_at')
    ->whereColumn('user_id', 'users.id')
    ->orderBy('created_at', 'desc')
    ->limit(1)
])->get();`;

const subselectOrdering = `// Order the users by the date of their last login
User::orderByDesc(Login::select('created_at')
    ->whereColumn('user_id', 'users.id')
    ->orderBy('created_at', 'desc')
    ->limit(1)
)->get();`;

export default <Slide bgColor="secondary" controlColor="light" progressColor="light">
  <Notes>
    <ul>
      <li>Subqueries can be used to add attribute to your model</li>
      <li>They can also be used to sort your models.</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="tertiary">
    Sub-Queries:
  </Heading>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Sub-Selects:</Text>
      <CodePane
        lang="php"
        textSize="18"
        source={ subselect }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Sub-Select Ordering:</Text>
      <CodePane
        lang="php"
        textSize="18"
        source={ subselectOrdering }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
</Slide>;
