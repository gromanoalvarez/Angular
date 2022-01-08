import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'; //servicios de protocolo http
//HttpClient libreria para hacer peticiones AJAX al Backend
//HttpHeaders libreria permite manipular mejor las peticiones Ajax
import { Observable } from "rxjs"; //Recoge los datos que devuelve la API
import { Article } from "../models/article";
import { Global } from "./global";

//decorador para usar el modelo sin tener que instanciarlo como "new" models
@Injectable()

export class ArticleService{

    public url: string;

    constructor( private _http: HttpClient){ 
    //como es un servicio su nombre empieza con _
    // ademas SE CARGA EN APP.MODULE.TS dentro de imports como todos los modulos
    // luego en blog se importa, carga en providers y se inicia en el constructor para usarse en  metodo ejemplo onInit
    this.url = Global.url; 
    // GLOBAL.TS trae url http://localhost:3900/api/
    }

    pruebas(){
        return "Soy el servicio de artículos";
    }

    //1ra PETICION AJAX!!! usando el servicio _http y su metodo get();
    getArticles(last:any = null): Observable<any>{
            // Significa que el parametro last puede tomar cualquier tipo pero inicialmente es un null
        var articles = 'articles';

        if(last != null){
        var articles = 'articles/true';
        }
    return this._http.get(this.url+articles); // usamos la ruta backend router.get('/articles/:last?', ArticleController.getArticles);
    }

    //2da PETICION AJAX
    getArticle(articleId:any): Observable<any>{
        return this._http.get(this.url+'article/'+articleId);
    }

    //3ra PETICION AJAX
    // usamos la ruta de backend router.get('/search/:search', ArticleController.search)
    search(searchString:string): Observable<any>{
        return this._http.get(this.url+'search/'+searchString);
    }
}