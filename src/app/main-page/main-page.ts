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
    },
    {
      name: "Currant",
      img: "images/currant.jpg",
      likes: 1,
    },
    {
      name: "Orange",
      img: "images/orange.jpg",
      likes: 3,
    }
  ]
}
