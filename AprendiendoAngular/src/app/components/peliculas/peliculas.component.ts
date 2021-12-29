import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'peliculas', //nombre de la etiqueta en la vista
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
//hooks(Eventos "implementados" como OnInit, DoCheck que se lanzan automaticamente al cargar mi componente)
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string

  constructor() {
    this.titulo="PELÍCULAS: El constructor carga este valor en la propiedad titulo"
    console.log('Constructor que asigna valores')
   }

  ngOnInit(): void {
    console.log("Evento onInit, componente iniciado. Aca puede ir lógica y funcionalidad")
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

}
