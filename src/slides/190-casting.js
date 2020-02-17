import React from 'react';
import {
  CodePane,
  Heading,
  Notes,
  Slide,
} from 'spectacle';

const casting = `class Purchase extends Model {
  protected $casts = [
    'quantity' => 'integer',
    'upc' => 'string',
    'cost' => 'decimal:2',
    'on_sale' => 'boolean',
    'options' => 'array',
    'purchased_at' => 'datetime:y-m-d'
  ];
}

dump($post->toArray());
=> [
  "quantity" => 3,
  "upc" => "384729482719",
  "cost" => 23.78,
  "on_sale" => false,
  "options" => [
    "Option 1",
    "Option 2"
  ],
  "purchased_at" => "2020-02-15",
]`;

export default <Slide>
  <Notes>
    <ul>
      <li>The supported cast types are: integer, real, float, double, decimal:[digits], string, boolean, object, array, collection, date, datetime, and timestamp. When casting to decimal, you must define the number of digits (decimal:2)</li>
      <li>When using the date or datetime cast type, you may specify the date's format.</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="tertiary">
    Attribute Casting:
  </Heading>
  <CodePane
    lang="php"
    source={ casting }
    margin="0 auto 20px auto"
  />
</Slide>;
