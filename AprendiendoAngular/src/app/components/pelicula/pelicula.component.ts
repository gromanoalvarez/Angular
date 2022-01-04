import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  // IMPORTANTE el signo ! hace que no deba inicializar en el constructor
  @Input() peli!: Pelicula; 
  @Input() i!: number;
  //evento que emite hacia el padre
  @Output() MarcarFavorita = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }

  seleccionar(event:any, peli:any){
    // Para pasar la peli al componente padre hago el @output
    this.MarcarFavorita.emit({
      peli: peli
    });
  }
  
}
