import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  //genero la variable Array que se cargue con todos los articulos encontrados(response) coincidentes y que use el modelo importado que es comun a todos los articles que se van creando
  public articles!: Article[];
  public search!: string;

  constructor(private _router: Router, private _route: ActivatedRoute, private _articleService: ArticleService) { 
  }

  ngOnInit(): void {
    //recoge el parametro que llega desde la URL ['search']
    this._route.params.subscribe(params => {
      var search = params ['search'];
      this.search = search;
      //sacar los articulos que estoy buscando
      this._articleService.search(search).subscribe(
        { //respuesta positiva
          next: (response) => {
            if(response.articles){
              this.articles=response.articles;
            }else{
              this.articles = [];
            }
          },//respuesta negativa
          error: (error) => { 
            console.log(error);
            //this._router.navigate(['/home']); si quiero para que me redirija al home
            this.articles = []; //declaro que existe el articles pero que esta vacio para que no cuelgue en cargando... de la vista
          }
        }
      )
    });
  }


}
