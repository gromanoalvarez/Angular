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
    }

    pruebas(){
        return "Soy el servicio de artículos";
    }

    //PRIMERA PETICION AJAX!!! GLOBAL.TS trae url http://localhost:3900/api/
// se usa la router.get('/articles/:last?', ArticleController.getArticles);// GET para SACAR info de la API, ? SIGNIFICA NO OBLIGATORIO
    getArticles(last:any = null): Observable<any>{
        var articles = 'articles';

        if(last != null){
        var articles = 'articles/true';
        }
    return this._http.get(this.url+articles);
    }
    // Significa que el parametro last puede tomar cualquier tipo pero inicialmente es un null

    getArticle(articleId:any): Observable<any>{
        return this._http.get(this.url+'article/'+articleId)
    }


}