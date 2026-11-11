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
      img: "photogram/public/img/img/banana.jpg",
      likes: 3,
    },
    {
      name: "Currant",
      img: "photogram/public/img/img/currant.jpg",
      likes: 1,
    },
    {
      name: "Orange",
      img: "photogram/public/img/img/orange.jpg",
      likes: 3,
    }
  ]
}
