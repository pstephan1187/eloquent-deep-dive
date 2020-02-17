import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Notes,
  Slide,
  Text,
} from 'spectacle';

const parameterMode = `$user = new User();
$user->name = 'Patrick Stephan';
$user->email = 'patrick@laravelstl.com';
$user->save();`;

const methodMode = `User::create([
  'name' => 'Patrick Stephan',
  'email' => 'patrick@laravelstl.com',
]);`;

const unguarding = `User::unguard();
User::create([/*...*/]);`;

const whitelisting = `class User extends Model {
  protected $fillable = ['name', 'email'];
}`;

const blacklisting = `class User extends Model {
  protected $guarded = ['password'];
}`;

export default <Slide bgColor="secondary" controlColor="light" progressColor="light">
  <Notes>
    <ul>
      <li>Set the columns like properties on an object. Call "save" method.</li>
      <li>Call the "create" static method to directly insert a row into the DB.</li>
      <li>Not allowed to set model attributes with an array by default.</li>
      <li>Must unguard, whitelist, or blacklist.</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="tertiary">
    Creating New Models:
  </Heading>
  <Appear>
    <div>
      <CodePane
        lang="php"
        source={ parameterMode }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Static "Create" Method:</Text>
      <CodePane
        lang="php"
        source={ methodMode }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Manually Unguarding:</Text>
      <CodePane
        lang="php"
        source={ unguarding }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Whitelisting:</Text>
      <CodePane
        lang="php"
        source={ whitelisting }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Blacklisting:</Text>
      <CodePane
        lang="php"
        source={ blacklisting }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
</Slide>;
