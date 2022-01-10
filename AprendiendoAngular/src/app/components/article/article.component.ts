import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  public article!: Article;
  public url!: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    //Para recoger un dato que llega por url
    this._route.params.subscribe((params) => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe({
        next: (response) => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        error: (error) => {
          this._router.navigate(['/home']);
        },
      });
    });
  }

  delete(id: any) {
    //utilizo el servicio de articulos al metodo delete, y me subscribo al observable
    this._articleService.delete(id).subscribe({
      next: (response) => {
        //utilizar el servicio y luego lo redirijo al blog
        this._router.navigate(['/blog']);
      },
      error: (error) => {
        console.log(error);
        this._router.navigate(['/blog']);
      },
    });
  }
}
