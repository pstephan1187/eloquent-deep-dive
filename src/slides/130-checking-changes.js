import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Slide,
  Text,
} from 'spectacle';

const isDirty = `$user = User::find(1);
$user->name = 'Charles Stephan';

$user->isDirty();// true;
$user->isDirty('name');// true;
$user->isDirty('email');// false;

$user->save();`;

const isClean = `$user = User::find(1);
$user->name = 'Charles Stephan';

$user->isClean();// false;
$user->isClean('name');// false;
$user->isClean('email');// true;

$user->save();`;

const wasChanged = `$user = User::find(1);
$user->name = 'Charles Stephan';
$user->save();

$user->wasChanged();// true
$user->wasChanged('name');// true
$user->wasChanged('email');// false`;

export default <Slide>
  <Heading fit caps textColor="tertiary">
    Testing for Updates:
  </Heading>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Was the model or attribute changed?</Text>
      <CodePane
        lang="php"
        source={ isDirty }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Has the value of the model or attribute remained unchanged?</Text>
      <CodePane
        lang="php"
        source={ isClean }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Has a change for the model or attribute been persisted to the database?</Text>
      <CodePane
        lang="php"
        source={ wasChanged }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
</Slide>;
