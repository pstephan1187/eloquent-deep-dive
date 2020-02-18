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

const casting = `class Company extends Model {
  public function employees() {
    return $this->belongsToMany(Person::class);
  }
}

class Person extends Model {
  public function employers() {
    return $this->belongsToMany(Company::class);
  }
}`;

const tables = `- companies
  - id

- people
  - id

- company_people
  - company_id
  - person_id
  - position
  - hire_date`;

const pivots = `
return $this->belongsToMany(Company::class)->withPivot(['position', 'hire_date']);
`;

export default <Slide bgColor="secondary" controlColor="light" progressColor="light">
  <Notes>
    <ul>
      <li>Must have pivot table.</li>
      <li>Pivot columns can be accessed via the 'pivot attribute'.</li>
      <li>Must include them with "withPivot".</li>
    </ul>
  </Notes>
  <Heading fit caps textColor="tertiary">
    Defining Many-to-Many Relationships
  </Heading>
  <Layout>
    <Fill>
      <div style={ { margin: '20px 10px 20px 0'}}>
        <Text textAlign="left" textSize="18">Models:</Text>
        <CodePane
          lang="php"
          source={ casting }
        />
      </div>
    </Fill>
    <Fill>
      <div style={ { margin: '20px 0 20px 10px' } }>
        <Text textAlign="left" textSize="18">Tables:</Text>
        <CodePane
          lang="php"
          source={ tables }
        />
      </div>
    </Fill>
  </Layout>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Pivot columns:</Text>
      <CodePane
        lang="php"
        source={ pivots }
      />
    </div>
  </Appear>
</Slide>;
