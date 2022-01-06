import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'; //servicios de protocolo http
//HttpClient libreria para hacer peticiones AJAX al Backend
//HttpHeaders libreria permite manipular mejor las peticiones Ajax
import { Observable } from "rxjs"; //Recoge los datos que devuelve la API
import { Article } from "../models/article";

//decorador para usar el modelo sin tener que instanciarlo como "new" models
@Injectable()

export class ArticleService{

    constructor( private _http: HttpClient){ 
    //como es un servicio su nombre empieza con _
    // ademas SE CARGA EN APP.MODULE.TS dentro de imports como todos los modulos
    // luego en blog se importa, carga en providers y se inicia en el constructor para usarse en  metodo ejemplo onInit
    }

    pruebas(){
        return "Soy el servicio de artículos";
    }

}