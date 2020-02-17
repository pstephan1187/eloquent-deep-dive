import React from 'react';
import {
  Appear,
  CodePane,
  Fill,
  Heading,
  Layout,
  Slide,
  Text,
} from 'spectacle';

const observers = `class PostObserver {
    public function created(Post $post) {
      // Notify subscribed users
    }

    public function retrieved(Post $post) {
      // Track the visit
    }
}`;

const boot = `// In the AppServiceProvider:
public function boot() {
  Post::observe(PostObserver::class);
}




`;

const customEvents = `class Post extends Model {
  public function boot() {
    parent::boot();
    $this->setObservableEvents(['created', 'retrieved', 'myCustomEvent']);
    $this->addObservableEvents('myCustomEvent');
    $this->removeObservableEvents('updated');
  }
}`;

export default <Slide bgColor="light">
  <Heading fit caps textColor="tertiary">
    Model Observers:
  </Heading>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Making an oberserver class:</Text>
      <CodePane
        lang="shell"
        source="php artisan make:observer UserObserver --model=Post"
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div margin="0 auto 20px auto">
      <Layout>
        <Fill>
          <div style={ { padding: '0 10px 20px 0' } }>
            <Text textAlign="left" textSize="18">The observer class:</Text>
            <CodePane
              lang="php"
              source={ observers }
            />
          </div>
        </Fill>
        <Fill>
          <div style={ { padding: '0 0 20px 10px' } }>
            <Text textAlign="left" textSize="18">Register the observer:</Text>
            <CodePane
              lang="php"
              source={ boot }
            />
          </div>
        </Fill>
      </Layout>
    </div>
  </Appear>
  <Appear>
    <div>
      <Text textAlign="left" textSize="18">Adding custom events to the observer:</Text>
      <CodePane
        lang="php"
        source={ customEvents }
        margin="0 auto 20px auto"
      />
    </div>
  </Appear>
</Slide>;
