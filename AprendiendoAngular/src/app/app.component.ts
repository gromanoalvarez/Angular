
import { Component } from '@angular/core';

@Component({ 
  selector: 'app-root',// Etiqueta PRINCIPAL (raiz)!!!! <app-root> 
  templateUrl: './app.component.html', // VISTA DE ESTE COMPONENTE PRINCIPAL
  styleUrls: ['./app.component.css'] // CSS DE ESTE COMPONENTE PRINCIPAL
})
export class AppComponent { // Para poder exportarla
  public title = 'Germán'; // Ya UTILIZO TYPESCRIPT!!!! 
}
