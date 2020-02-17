import React from 'react';
import {
  CodePane,
  Heading,
  Slide,
} from 'spectacle';

const casting = `$comment->post;// Post model
$post->comments;// All tag models

$post->comments();// Query builder
$post->comments()->where(...)->get();

$postsWithComments = Post::has('comments')->get();
$postsWithNoComments = Post::doesntHave('comments')->get();
$popularPosts = Post::has('comments', '>', 20)->get();
$tagsWithPopularPosts = Tag::has('posts.comments', '>', 20)->get();
$postsICommentedOn = Post::whereHas('comments', function($query){
  $query->where('author_id', auth()->user()->id);
})->get();

$post = Post::withCount('comments')->find(12);
$post->comments_count;`;

export default <Slide>
  <Heading fit caps textColor="tertiary">
    Querying Relationships:
  </Heading>
  <CodePane
    lang="php"
    source={ casting }
    margin="20px auto 20px auto"
  />
</Slide>;
