import { Component } from '@angular/core'; // importo gracias a lo instalado previamente

@Component({ // Para indicar las PROPIEDADES o características de este componente
    selector: 'mi-componente', //nombre de la etiqueta
    templateUrl: './mi-componente.component.html' //usar templeteStrings ``
})
export class MiComponente{ // esta es la clase 

    // primero las propiedades
    public titulo: string; 
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    // segundo el constructor
    constructor(){
        this.titulo = 'Hola mundo, este es MI COMPONENTE'
        this.comentario = '{{Usando Binding por Interpolación}}'
        this.year = 2021;
        this.mostrarPeliculas = true;
    }
    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}