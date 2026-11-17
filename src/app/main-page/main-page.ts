import { Component } from '@angular/core';
import { Post } from '../interfaces/post';
import { RouterLink } from '@angular/router';
import { SinglePost } from './single-post/single-post';

@Component({
  imports: [RouterLink, SinglePost],
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
      likes: 7,
      isLiked: true,
    }
  ]
}
