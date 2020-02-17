import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Slide,
  Text,
} from 'spectacle';

const parameterMode = `$user = User::find(1);
$user->name = 'Charles Stephan';
$user->save();`;

const methodMode = `$user = User::find(1);
$user->fill([
  'name' => 'Charles Stephan'
]);
$user->save();`;

const sqlMode = `User::where('email', 'patrick@laravelstl.com')->update([
  'name' => 'Charles Stephan',
]);`;

export default <Slide bgColor="secondary" controlColor="light" progressColor="light">
  <Heading fit caps textColor="tertiary">
    Updating Models:
  </Heading>
  <Appear>
    <div>
      <CodePane
        lang="php"
        source={ parameterMode }
        textSize="24"
        margin="20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Fill Method:</Text>
      <CodePane
        lang="php"
        source={ methodMode }
        textSize="24"
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Updating Directly in the Database:</Text>
      <CodePane
        lang="php"
        source={ sqlMode }
        textSize="24"
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
</Slide>;
