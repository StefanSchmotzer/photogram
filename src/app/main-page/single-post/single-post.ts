import { Component,input, output, signal } from '@angular/core';
import { Post, PostComment } from '../../interfaces/post';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-single-post',
  styleUrl: './single-post.scss',
  templateUrl: './single-post.html',
})
export class SinglePost {
  postInput = input.required<Post>();
  commentAdded = output<PostComment>();

  commentInput =form(signal(''));

  addComment() {
    const text = this.commentInput().value().trim();

    if (!text) return;

    this.commentAdded.emit({
      name: 'Du',
      text,
    });

    this.commentInput().value.set('');
  }

  toggleLike(post: Post) {
    post.isLiked = !post.isLiked;

    if (post.isLiked) {
      post.likes++;
    } else {
      post.likes--;
    }
  }}
