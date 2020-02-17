import React from 'react';
import {
  Code,
  CodePane,
  Heading,
  Notes,
  Slide,
  Text,
} from 'spectacle';

const makeModel = `php artisan make:model Post
php artisan make:model Post -m # migration
php artisan make:model Post -f # factory
php artisan make:model Post -r # resource controller
php artisan make:model Post -a # all the above`;

const modelContents = `<?php

namespace App;

use Illuminate\\Database\\Eloquent\\Model;

class Post extends Model
{
    //
}`;

export default <Slide>
  <Notes>
    <ul>
      <li>Explain Resource Controller</li>
      <li>Normal Controller: -c</li>
      <li>Nothing else is needed to make a model work.</li>
    </ul>
  </Notes>
  <Heading fit caps>
    Making a Model:
  </Heading>
  <CodePane
    lang="shell"
    textSize="18"
    source={ makeModel }
    margin="20px auto"
  />
  <Text textSize={ 20 } bold textAlign="left" textColor="tertiary">
    New File:&nbsp;
  <Code textSize={ 20 } textFont="tertiary" textAlign="left" textColor="tertiary">app/Post.php</Code>
  </Text>
  <CodePane
    lang="php"
    textSize="18"
    source={ modelContents }
    margin="20px auto"
  />
</Slide>;
