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
    console.log(this._articleService.pruebas());
  }

}
