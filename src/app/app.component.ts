import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`Adding Article title:${title.value} and link:${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
