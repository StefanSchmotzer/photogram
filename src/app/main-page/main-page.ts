import { Component } from '@angular/core';
import { Post, PostComment } from '../interfaces/post';
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
      comments: [
      { name: 'Anna', text: 'Sieht lecker aus!' },
      { name: 'Max', text: 'Bananen sind super.' },
      ],
    },
    {
      name: "Currant",
      img: "images/currant.jpg",
      likes: 10,
      isLiked: true,
      comments: [
      { name: 'Lena', text: 'Die sehen frisch aus.' },
      ],
    },
    {
      name: "Orange",
      img: "images/orange.jpg",
      likes: 7,
      isLiked: true,
      comments: [
      { name: 'Tom', text: 'Perfekt für einen Snack!' },
      ],
    }
  ]
  addComment(post: Post, comment: PostComment): void {
    post.comments = [...post.comments, comment];}
}
