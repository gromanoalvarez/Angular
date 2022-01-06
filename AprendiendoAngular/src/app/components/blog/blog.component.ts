import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    //subscribe es un metodo del Observable getArticles que permite recoger los datos
    //que devuelve las peticiones http
    this._articleService.getArticles().subscribe(
      {
        next: (response) => console.log(response),
        error: (error) => console.log(error)
      }
    );
  }

}
