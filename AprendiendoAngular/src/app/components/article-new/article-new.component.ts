import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {

  public article: Article;

  constructor() { 
    this.article = new Article('','','',null,'');
  }
        //   me baso en : 
      //export class Article{
  //     constructor( 
  //         public _id: string,
  //         public title: string,
  //         public content: string,
  //         public date: any,
  //         public image: string
  //         ){
  //     }
  // }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.article);
  }

}
