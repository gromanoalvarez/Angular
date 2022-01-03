//Cargar los componentes que vienen con el mismo angular
import { Component, OnInit } from '@angular/core';
//recoger el parametro obligatorio  que se pone en la ruta de app.routing.ts, por eso debo cargar los componentes del routing
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombres: string;
  public apellidos: string;

        /**Con Route vamos a sacar los parametros de la URL
     * con el Router reditecciones a otras paginas
     */
  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.nombres="";
    this.apellidos="";
   }

   /**PRIMER METODO QUE EJECUTA LUEGO DEL CONSTRUCTOR */
  ngOnInit(): void {
    
    // Suscribe() es un OBSERVABLE: mira o espera una respuesta de un servicio, asincrono mayormente
    this._route.params.subscribe((params: Params) => {
      this.nombres=params['nombres'];
      this.apellidos=params['apellidos']
    });

  }

}
