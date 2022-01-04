import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'peliculas', //nombre de la etiqueta en la vista
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
//hooks(Eventos "implementados" como OnInit, DoCheck que se lanzan automaticamente al cargar mi componente)
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<any>; //array de objetos con propiedad titulo e imagen

  constructor() {
    this.titulo = "PELÍCULAS: El constructor carga este valor en la propiedad titulo";
    this.peliculas = [
      { year: 2021, title: "Spiderman 4: Verse", image: 'https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/08/Nueva-e-irresistible-pista-del-Spider-Verse-de-No-Way-Home-aparece-gracias-al-guionista-de-Spider-Man-into-the-Spiderverse.jpg?fit=1280%2C720&quality=80&ssl=1'},
      { year: 2018, title: "Los vengadores Endgame", image: 'https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F052%2F759%2Fvengadores-endgame-1.jpg&nuevoancho=690&medio=abc'},
      { year: 2011, title: "Batman vs Superman", image: 'https://i0.wp.com/elrincon.tv/wp-content/uploads/2016/03/batman_v_superman.jpg?resize=660%2C330&ssl=1'},
      { year: 2013, title: "Batman vs Superman 2", image: 'https://i0.wp.com/elrincon.tv/wp-content/uploads/2016/03/batman_v_superman.jpg?resize=660%2C330&ssl=1'}
    ];
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
