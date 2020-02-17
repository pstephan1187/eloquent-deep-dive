import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Slide,
  Text,
} from 'spectacle';

export default <Slide bgColor="secondary" controlColor="light" progressColor="light">
  <Heading fit caps textColor="tertiary">
    Retrieving Models:
  </Heading>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Get all rows:</Text>
      <CodePane
        lang="php"
        textSize="18"
        source="Post::all();"
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Find the row with the given primary key or array of keys:</Text>
      <CodePane
        lang="php"
        textSize="18"
        source={ `Post::find($id);\nPost::find($arrayOfIds);` }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Get the first row that matches the given parameter:</Text>
      <CodePane
        lang="php"
        textSize="18"
        source={ `Post::firstWhere('title', 'Eloquent Basics');` }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Throw a 404 error if no row is found:</Text>
      <CodePane
        lang="php"
        textSize="18"
        source={ `Post::findOrFail($id);\nPost::where('title', 'Eloquent Basics')->firstOrFail();` }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Get an aggregate of matching rows (count, sum, max, avg, min):</Text>
      <CodePane
        lang="php"
        textSize="18"
        source={ `Post::count();\nPost::where('title', 'like', '%eloquent%')->sum('likes');` }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
</Slide>;
