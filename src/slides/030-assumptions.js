import React from 'react';
import {
  Appear,
  Code,
  CodePane,
  Heading,
  Slide,
  Text,
} from 'spectacle';

const primaryKey = `protected $primaryKey = 'uuid';
public $incrementing = false;
protected $keyType = 'string';`;

export default <Slide>
  <Heading fit caps textColor="secondary">
    Some Assumptions
  </Heading>
  <Appear>
    <div>

      <Text textSize="24">
        Models assume the table's primary key is an auto-incrementing 'id'.
      </Text>
      <Text textSize="18" margin="20px 0 0 0">But you can override that:</Text>
      <CodePane
        lang="shell"
        textSize="18"
        source={ primaryKey }
        margin="20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textSize="24">
        Models assume the table contains&nbsp;
        <Code textSize="24">created_at</Code>&nbsp;
        and&nbsp;
        <Code textSize="24">updated_at</Code>&nbsp;
        columns.
      </Text>
      <Text textSize="18" margin="20px 0 0 0">Again, you can override it:</Text>
      <CodePane
        lang="shell"
        textSize="18"
        source="public $timestamps = false;"
        margin="20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textSize="24">
        Models utilize the default database connection.
      </Text>
      <Text textSize="18" margin="20px 0 0 0">You guessed it... you can override:</Text>
      <CodePane
        lang="shell"
        textSize="18"
        source="protected $connection = 'connection-name';"
        margin="20px auto"
      />
    </div>
  </Appear>
</Slide>;
