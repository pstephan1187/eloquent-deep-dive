import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Notes,
  Slide,
  Text,
} from 'spectacle';

const firstOrCreate = `$user = User::firstOrCreate(
  [ 'email' => 'patrick@laravelstl.com' ],
  [ 'name' => 'Patrick Stephan', 'password' => bcrypt('password') ]
);`;

const firstOrNew = `$user = User::firstOrNew(
  [ 'email' => 'patrick@laravelstl.com' ],
  [ 'name' => 'Patrick Stephan', 'password' => bcrypt('password') ]
);`;

const updateOrCreate = `$user = User::updateOrCreate(
  [ 'email' => 'patrick@laravelstl.com' ],
  [ 'name' => 'Patrick', 'password' => bcrypt('newpassword') ]
);`;

export default <Slide>
  <Notes>
    <ul>
      <li>firstOrCreate: find by first array, create with both.</li>
      <li>firstOrNew: find by first array, instantiate with both.</li>
      <li>updateOrCreate: find by first array, create with both or update with second.</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="secondary">
    Optionally Create/Update Models:
  </Heading>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Retrieve or Create:</Text>
      <CodePane
        lang="php"
        textSize="18"
        source={ firstOrCreate }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Retrieve or Instantiate:</Text>
      <CodePane
        lang="php"
        textSize="18"
        source={ firstOrNew }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Update or Create:</Text>
      <CodePane
        lang="php"
        textSize="18"
        source={ updateOrCreate }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
</Slide>;
