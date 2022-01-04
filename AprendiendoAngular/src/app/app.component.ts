//            ESTO ES UN COMPONENTE SIEMPRE CON .TS

// Un componente representa un trozo de pantalla, representa una parte de la applicación  
// Todo componente debe terminar en .TS


import { Component } from '@angular/core';
//ESTO ES UN "DECORADOR": una funcionalidad que modifica el comportamiento de la clase
@Component({ 
  selector: 'app-root',// etiqueta <app-root> dentro del index.html
  templateUrl: './app.component.html', //es la VISTA y donde esta asociada esa vista, lo que se le va a mostrar al usuario
  styleUrls: ['./app.component.css'] // propiedad que indico la hoja de stilo unica para este componente
})
export class AppComponent { // para poder exportarla
  public title = 'Germán'; // ya UTILIZO TYPESCRIPT!!!! Puedo decidir propiedades como si es public, private, protected, modificadores de la visibilidar 
  public homeText ='Bienvenido a mi web SPA con Angular (desde componente padre)';
}

// Una vez que tenemos el componente terminado con su VISTA(app.component.html) y su LOGICA en la CLASE lo tenemos que --IMPORTAR--  import {AppComponent}from './app.component' EN EL app.module.ts