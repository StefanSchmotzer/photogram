import { Component } from '@angular/core';
import { Post } from '../interfaces/post';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-main-page',
  styleUrl: './main-page.scss',
  templateUrl: './main-page.html',
})
export class MainPage {
  posts: Post[] = [
    {
      name: "Banana",
      img: "images/banana.jpg",
      likes: 4,
      isLiked: false,
    },
    {
      name: "Currant",
      img: "images/currant.jpg",
      likes: 10,
      isLiked: true,
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
