import React from 'react';
import {
  Appear,
  CodePane,
  Heading,
  Slide,
  Text,
} from 'spectacle';

const events = `class Post extends Model {
  protected $dispatchesEvents = [
    'created' => NotifySubscribers::class,
    'retrieved' => TrackVisit::class,
    'myCustomEvent' => SomeRandomLogic::class,
  ];
}`;

const customEvents = `class Post extends Model {
  public function someRandomFunction() {
    $this->fireModelEvent('myCustomEvent', false);
  }
}`;

const boot = `class Post extends Model {
  public function boot() {
    parent::boot();
    self::creating(function($post){
      //...
    });
  }
}`;

export default <Slide>
  <Heading fit caps textColor="tertiary">
    Model Events:
  </Heading>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Registering event listeners:</Text>
      <CodePane
        lang="php"
        source={ events }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Adding your own events:</Text>
      <CodePane
        lang="php"
        source={ customEvents }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">In the boot method:</Text>
      <CodePane
        lang="php"
        source={ boot }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
</Slide>;
