import { Component } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  imports: [],
  selector: 'app-main-page',
  styleUrl: './main-page.scss',
  templateUrl: './main-page.html',
})
export class MainPage {
  posts: Post[] = [
    {
      name: "Banana",
      img: "images/banana.jpg",
      likes: 3,
      isLiked: true,
    },
    {
      name: "Currant",
      img: "images/currant.jpg",
      likes: 1,
      isLiked: false,
    },
    {
      name: "Orange",
      img: "images/orange.jpg",
      likes: 3,
      isLiked: false,
    }
  ]
  toggleLike(post: Post) {
    post.isLiked = !post.isLiked;

    if (post.isLiked) {
      post.likes++;
    } else {
      post.likes--;
    }
  }
}
