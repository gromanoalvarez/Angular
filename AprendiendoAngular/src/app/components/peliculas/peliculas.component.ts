import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service'; //se carga en components como providers

@Component({
  selector: 'peliculas', //nombre de la etiqueta en la vista
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
//hooks(Eventos "implementados" como OnInit, DoCheck que se lanzan automaticamente al cargar mi componente)
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[]; //array de objetos con propiedad titulo e imagen
  public favorita!:  Pelicula;
  public fecha: any;

  constructor( private _peliculaService: PeliculaService) {
    this.titulo = "El constructor de PeliculasComponent carga este valor en la propiedad titulo";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2022,0,5);
  }

  ngOnInit() {
    console.log("Evento onInit, componente iniciado. Aca puede ir lógica y funcionalidad");
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(): void {
    console.log("DoCheck lanzado por cualquier cambio que hagas en el componente")
  }

  ngOnDestroy(): void {
      console.log("El componente se va a eliminar del DOM")
  }
//Este método se llamará desde el evento click de la vista peliculas.component.html
  cambiarTitulo(): void {
    this.titulo = "El título se ha modificado por hacer click al button"
  }
//Este método muestra lo que traje del componente hijo y lo guardo en favorita
  mostrarFavorita(event:any){
    this.favorita = event.pelicula;
  }

}
