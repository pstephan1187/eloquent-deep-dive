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

const deleting = `// Deleting a model instance:
$post->delete();

// Deleting by SQL query:
Post::where('published_at', '<', '2017-01-01')->delete();

// Deleting by model IDs:
Post::destroy(12);
Post::destroy([12, 13, 14]);`;

const softDeleting1 = `class Post extends Model {
  use SoftDeletes;
}`;

const softDeleting2 = `Schema::table('posts', function(Blueprint $table) {
  $table->softDeletes();
});`;

const queryingSoftDeletedModels1 = `// Included deleted models:
Post::where('slug', 'eloquent-basics')
    ->withTrashed()->get();

// Only get deleted models:
Post::where('slug', 'eloquent-basics')
    ->onlyTrashed()->get();`;

const queryingSoftDeletedModels2 = `// Restoring soft-deleted models:
$post->restore();
Post::where('slug', 'eloquent-basics')->restore();

// Permanently deleting models:
$post->forceDelete();
Post::where('slug', 'eloquent-basics')->forceDelete();`;

export default <Slide bgColor="secondary" controlColor="light" progressColor="light">
  <Heading fit caps textColor="tertiary">
    Deleting Models:
  </Heading>
  <Appear>
    <div>
      <CodePane
        lang="php"
        source={ deleting }
        margin="20px auto"
      />
    </div>
  </Appear>
  <Appear>
    <div margin="0 auto 20px auto">
      <Text textAlign="left" textSize="18">Soft Deleting:</Text>
      <Layout>
        <Fill>
          <div style={ { padding: '0 10px 20px 0' } }>
            <CodePane
              lang="php"
              source={ softDeleting1 }
            />
          </div>
        </Fill>
        <Fill>
          <div style={ { padding: '0 0 20px 10px' } }>
            <CodePane
              lang="php"
              source={ softDeleting2 }
            />
          </div>
        </Fill>
      </Layout>
    </div>
  </Appear>
  <Appear>
    <div margin="0 auto 20px auto">
      <Layout>
        <Fill>
          <div style={ { padding: '0 10px 20px 0' } }>
            <Text textAlign="left" textSize="18">Querying Soft-Deleted Models:</Text>
            <CodePane
              lang="php"
              source={ queryingSoftDeletedModels1 }
            />
          </div>
        </Fill>
        <Fill>
          <div style={ { padding: '0 0 20px 10px' } }>
            <Text textAlign="left" textSize="18">Soft-Deleted Model Actions:</Text>
            <CodePane
              lang="php"
              source={ queryingSoftDeletedModels2 }
            />
          </div>
        </Fill>
      </Layout>
    </div>
  </Appear>
</Slide>;
