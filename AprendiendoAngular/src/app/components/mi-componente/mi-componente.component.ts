
/**
 *  .component indica la clase del componente
 *  .ts que corre con typeScript
 * 
 *  Todo dentro de Angular es una Directiva
 * 
 * {{ BINDING por INTERPOLACIÓN }}
 * Para "mostrar un dato", una "union de una propiedad a la vista" y mostrar mediante las llaves 
 * 
 */

import { Component } from '@angular/core'; // importo gracias a lo instalado previamente

@Component({ // Para indicar las PROPIEDADES o características de este componente
    selector: 'mi-componente', //nombre de la etiqueta
    template: ` 
    <h1>{{titulo}}</h1> 
    <h2>{{year}}</h2>
    <p>{{comentario}}</p>
    ` //usar templeteStrings ``
})
export class MiComponente{ // esta es la clase 

    // primero las propiedades
    public titulo: string; 
    public comentario: string;
    public year: number;

    // segundo el constructor
    constructor(){
        this.titulo = 'Hola mundo, este es MI COMPONENTE'
        this.comentario = '{{Usando Binding por Interpolación}}'
        this.year = 2021;

        console.log("Componente mi-componente cargado!!");
        console.log(this.titulo, this.comentario, this.year)
    }

}