import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; //LO QUE SE DEBE PONER EN "declarations:[AppComponent]"

/**
 * 
 * Permite cargar configuraciones para el MÓdulo. IMPORTA EL COMPONENTE A CUALQUIER PARTE DE MI APLICACIóN 
 * es una BUENA PRACTICA con el nombre de mis componentes usar sufijos "component"
 */

 import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent, // TANTO PARA COMPONENTES COMO PARA DIRECTIVAS COMO PIPES
    MiComponente, PeliculasComponent, PruebasComponent, HeaderComponent, SliderComponent, SidebarComponent // NO OLVIDAR, instanciar aqui todos los componentes importados
  ],
  imports: [
    BrowserModule //MÓDULOS QUE QUIERO UTILIZAR
  ],
  providers: [], //SERVICIOS
  bootstrap: [AppComponent] //INDICAR CUAL ES EL COMPONENTE PRINCIPAL QUE VA A ENTRAR A ESTE MÓDULO 
})
export class AppModule { }
