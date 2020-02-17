import React from 'react';
import {
  Deck,
  Heading,
  Notes,
  Slide,
  Text,
} from 'spectacle';
import theme from './theme';

import MakeModel from './slides/010-make-model';
import Tables from './slides/020-tables';
import Assumptions from './slides/030-assumptions';
import Retrieval from './slides/040-retrieval';
import Wheres1 from './slides/050-wheres-1';
import Wheres2 from './slides/060-wheres-2';
import Wheres3 from './slides/070-wheres-3';
import ScopesLocal from './slides/071-scopes-local';
import ScopesGlobal from './slides/072-scopes-global';
import SubQueries from './slides/080-sub-queries';
import Results from './slides/090-results';
import Creating from './slides/100-creating';
import OptionalCreating from './slides/110-optional-creating';
import Updating from './slides/120-updating';
import TestingChanges from './slides/130-checking-changes';
import Deleting from './slides/140-deleting';
import Events from './slides/150-model-events';
import Observers from './slides/160-model-observers';
import Accessors from './slides/170-accessors';
import Mutators from './slides/180-mutators';
import Casting from './slides/190-casting';
import RelationshipsOneToMany from './slides/200-relationships-one-to-many';
import RelationshipsManyToMany from './slides/210-relationships-many-to-many';
import RelationshipsPolymorphic from './slides/220-relationships-polymorphic';
import RelationshipsManyToManyPolymorphic from './slides/230-relationships-many-to-many-polymorphic';
import QueryingRelationships from './slides/240-querying-relationship';
import EagerLoading from './slides/250-eager-loading';
import Chunking from './slides/260-chunking';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={ ['fade'] }
        transitionDuration={ 250 }
        theme={ theme }
        showFullscreenControl={ false }
      >
        <Slide bgImage="/img/meetup-img.jpeg"></Slide>
        <Slide>
          <Heading fit caps textColor="secondary">
            Eloquent ORM
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Laravel's Active Record Model Implementation
          </Text>
        </Slide>
        { MakeModel }
        { Tables }
        { Assumptions }
        { Retrieval }
        { Wheres1 }
        { Wheres2 }
        { Wheres3 }
        { ScopesLocal }
        { ScopesGlobal }
        { SubQueries }
        { Results }
        { Creating }
        { OptionalCreating }
        { Updating }
        { TestingChanges }
        { Deleting }
        { Events }
        { Observers }
        { Accessors }
        { Mutators }
        { Casting }
        { RelationshipsOneToMany }
        { RelationshipsManyToMany }
        { RelationshipsPolymorphic }
        { RelationshipsManyToManyPolymorphic }
        { QueryingRelationships }
        { EagerLoading }
        { Chunking }
        <Slide>
          <Notes>
            I didn't cover things like
            <ul>
              <li>Custom Pivot Models</li>
              <li>Custom Collections</li>
              <li>Removing Global Scopes</li>
              <li>Blocking Events</li>
              <li>Replicating Models</li>
              <li>Refreshing Models</li>
              <li>A lot of Relationship stuff</li>
              <li>Model Resources</li>
              <li>JSON attributes</li>
            </ul>
          </Notes>
          <Heading fit caps textColor="secondary">
            So much more!
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={ 1 } fit bold>
            <a style={{color: '#333333'}} href="https://laravel.com/docs/6.x/eloquent" target="_blank" rel="noopener noreferrer">The Docs</a><br />
            <a style={{color: '#333333'}} href="https://eloquentbyexample.com/" target="_blank" rel="noopener noreferrer">Eloquent by Example</a><br />
            <a style={{color: '#333333'}} href="https://chrisgmyr.com/2018/08/tips-tricks-and-good-practices-with-laravels-eloquent" target="_blank" rel="noopener noreferrer">Another Slide Deck</a><br />
            <a style={{color: '#333333'}} href="https://github.com/reinink/laracon2018" target="_blank" rel="noopener noreferrer">Advanced Eloquent Queries</a><br />
            <a style={{color: '#333333'}} href="https://www.youtube.com/watch?v=06--kezKc0Q" target="_blank" rel="noopener noreferrer">Expressive Eloquence Collections</a>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
