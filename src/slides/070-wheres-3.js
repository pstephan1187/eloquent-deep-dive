import React from 'react';
import {
  Code,
  CodePane,
  Fill,
  Heading,
  Layout,
  Slide,
  Text,
} from 'spectacle';

const php = `User::whereBetween('age', [ 18, 65 ]);

Charge::whereIn('type', ['manual', 'credit-card'])

User::whereNull('activated_at')

User::whereDate('created_at', '2020-02-15')

User::whereYear('created_at', '2020')// Month, Day, Time

User::whereColumn('created_at', 'updated_at')

User::where('meta->current_page', 'dashboard')



User::whereJsonContains('meta->recent_visits', 'profile')

`;

const sql = `SELECT * FROM users WHERE age BETWEEN 18 AND 65

SELECT * FROM charges WHERE type IN ('manual','credit-card')

SELECT * FROM users WHERE activated_at IS NULL

SELECT * FROM users WHERE date(created_at) = '2020-02-15'

SELECT * FROM users WHERE year(created_at) = '2020'

SELECT * FROM users WHERE created_at = updated_at

SELECT * FROM users WHERE json_unquote(
  json_extract(meta, '$."current_page"')
) = 'dashboard'

SELECT * FROM users WHERE json_contains(
  meta, dashboard, '$."profile"'
)`;

export default <Slide>
  <Heading fit caps textColor="secondary">
    Even More Where Clauses:
  </Heading>
  <Text textAlign="left" textSize="18">Most of the where methods have <Code textFont="tertiary" textSize="18">or</Code> and <Code textFont="tertiary" textSize="18">Not</Code> modifiers.</Text>
  <Layout>
    <Fill>
      <CodePane
        lang="php"
        source={ php }
        margin="20px 10px 20px 0"
      />
    </Fill>
    <Fill>
      <CodePane
        lang="sql"
        source={ sql }
        margin="20px 0 20px 10px"
      />
    </Fill>
  </Layout>
</Slide>;
