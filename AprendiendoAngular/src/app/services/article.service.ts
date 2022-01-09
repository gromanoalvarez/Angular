import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //servicios de protocolo http
//HttpClient libreria para hacer peticiones AJAX al Backend
//HttpHeaders libreria permite manipular mejor las peticiones Ajax
import { Observable } from 'rxjs'; //Recoge los datos que devuelve la API
import { Article } from '../models/article';
import { Global } from './global';

//decorador para usar el modelo sin tener que instanciarlo como "new" models
@Injectable()
export class ArticleService {
  public url: string;

  constructor(private _http: HttpClient) {
    //como es un servicio su nombre empieza con _
    // ademas SE CARGA EN APP.MODULE.TS dentro de imports como todos los modulos
    // luego en blog se importa, carga en providers y se inicia en el constructor para usarse en  metodo ejemplo onInit
    this.url = Global.url;
    // GLOBAL.TS trae url http://localhost:3900/api/
  }

  pruebas() {
    return 'Soy el servicio de artículos';
  }

  //1ra PETICION AJAX!!! usando el servicio _http y su metodo get();
  getArticles(last: any = null): Observable<any> {
    // Significa que el parametro last puede tomar cualquier tipo pero inicialmente es un null
    var articles = 'articles';

    if (last != null) {
      var articles = 'articles/true';
    }
    return this._http.get(this.url + articles); // usamos la ruta backend router.get('/articles/:last?', ArticleController.getArticles);
  }

  //2da PETICION AJAX
  getArticle(articleId: any): Observable<any> {
    return this._http.get(this.url + 'article/' + articleId);
  }

  //3ra PETICION AJAX
  // usamos la ruta de backend router.get('/search/:search', ArticleController.search)
  search(searchString: string): Observable<any> {
    return this._http.get(this.url + 'search/' + searchString);
  }

  //4to Llamada http a la API REST para guardar los nuevos articulos
  create(article: Article): Observable<any> {
    // POR HTTP todo lo que envio debe ser numerico o string!!
    //por eso uso stringify convierte mi objeto literal en JSON string
    let params = JSON.stringify(article);
    //Cabecera para configurar el Content-type que sea application/json para el backend
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    //llamada ajax a la ruta save por post (para guardar info en el backend)
    return this._http.post(this.url + 'save', params, { headers: headers });
  }

  update(id: any, article: any): Observable<any> {
    //lo convierto en string para poder pasar el objeto compatible en peticion http
    let params = JSON.stringify(article);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    //PETICION AJAX POR PUT router.put('/article/:id', ArticleController.update); PUT para ACTUALIZAR
    return this._http.put(this.url + 'articles/' + id, params, {
      headers: headers,
    });
  }

  delete(id: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // router.delete('/article/:id', ArticleController.delete);// DELETE para BORRAR
    return this._http.delete(this.url + 'article/' + id, { headers });
  }
}
