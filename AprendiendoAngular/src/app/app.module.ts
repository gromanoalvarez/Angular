import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; //LO QUE SE DEBE PONER EN "declarations:[AppComponent]"

/**
 * 
 * Permite cargar configuraciones para el Modulo. IMPORTA EL COMPONENTE A CUALQUIER PARTE TE MI APLICACION 
 * 
 */

@NgModule({
  declarations: [
    AppComponent // TANTO PARA COMPONENTES COMO PARA DIRECTIVAS COMO PIPES
  ],
  imports: [
    BrowserModule //MODULOS QUE QUIERO UTILIZAR
  ],
  providers: [], //SERVICIOS
  bootstrap: [AppComponent] //CUAL ES EL COMPONENTE PRINCIPAL QUE VA A ENTRAR A ESTE MODULO EN CONCRETO
})
export class AppModule { }
