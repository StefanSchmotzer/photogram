import { Component, signal } from '@angular/core';
import { MainPage } from './main-page/main-page';

@Component({
  imports: [MainPage],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('photogram');
}
