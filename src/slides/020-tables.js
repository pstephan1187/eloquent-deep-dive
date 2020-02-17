import React from 'react';
import {
  CodePane,
  Slide,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text,
} from 'spectacle';

export default <Slide bgColor="light">
  <Text fit bold caps>Models derive their table from the class name.</Text>
  <Text textSize={ 18 }>(Pluralized snake case)</Text>
  <Table padding="20px" bgColor="tertiary" textAlign="left" textColor="light">
    <TableHeader>
      <TableRow>
        <TableHeaderItem textSize={ 36 }>Model</TableHeaderItem>
        <TableHeaderItem textSize={ 36 }>Table</TableHeaderItem>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableItem textSize={ 24 }>Post</TableItem>
        <TableItem textSize={ 24 } textFont="tertiary">posts</TableItem>
      </TableRow>
      <TableRow>
        <TableItem textSize={ 24 }>Company</TableItem>
        <TableItem textSize={ 24 } textFont="tertiary">companies</TableItem>
      </TableRow>
      <TableRow>
        <TableItem textSize={ 24 }>UserType</TableItem>
        <TableItem textSize={ 24 } textFont="tertiary">user_types</TableItem>
      </TableRow>
    </TableBody>
  </Table>
  <Text textSize="24" textColor="tertiary" margin="20px 0 0 0">You can specify a table if needed:</Text>
  <CodePane
    lang="php"
    textSize="24"
    source="protected $table = 'table_name';"
    margin="20px auto"
  />
</Slide>;
