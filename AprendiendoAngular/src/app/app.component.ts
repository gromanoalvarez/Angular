
import { Component } from '@angular/core';

@Component({ 
  selector: 'app-root',// etiqueta <app-root> 
  templateUrl: './app.component.html', // VISTA DE ESTE COMPONENTE
  styleUrls: ['./app.component.css'] // CSS DE ESTE COMPONENTE
})
export class AppComponent { // para poder exportarla
  public title = 'Germán'; // ya UTILIZO TYPESCRIPT!!!! Puedo decidir propiedades como si es public, private, protected, modificadores de la visibilidad 
}

// Una vez que tenemos el componente terminado con su VISTA(app.component.html) y su LOGICA en la CLASE lo tenemos que --IMPORTAR--  import {AppComponent}from './app.component' EN EL app.module.ts