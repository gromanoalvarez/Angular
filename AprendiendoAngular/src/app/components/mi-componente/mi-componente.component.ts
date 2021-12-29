
/**
 *          ESTE ES UN COMPONENTE (manualmente generando el fichero)
 *  .component indica la clase del componente
 *  .ts que corre con typeScript
 * 
 *  Todo dentro de Angular es una Directiva
 * 
 * {{ BINDING por INTERPOLACIÓN }}
 * Para "mostrar un dato", una "union de una propiedad a la vista" y mostrar mediante las llaves 
 * 
 * 
 * Cuando se está desarrollando una aplicación utilizamos 
 *          ANGULAR CLI         para crear los componentes 
 * Con un simple comando podemos generar un componente haciendolo más rápido de manera automática
 * 
 */

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