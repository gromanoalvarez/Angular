import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {
   }

  ngOnInit(): void {
  }

}
