/**
 * app.routing.ts sirve para
 //1.Importar los módulos del router de angular
 *  y crear rutas para moverse a traves de
 la url 
 *  */  
import { ModuleWithProviders  } from "@angular/core"; //Esta clase importada permite generar un modulo para tenerlo todo separado y cargarlo  dentro del framework 
import { Routes, RouterModule } from '@angular/router'; //Permitir generar objetos de rutas y el modulo para configurar el frameworks de angular

//2.Importar COMPONENTES COMO PÁGINA EXCLUSIVA
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PaginaComponent } from "./components/pagina/pagina.component";

//3.Array de rutas, configuracion de las rutas
//es una constante que guarda el array de clase Routes que contiene objetos json que son cada ruta
//la ruta vacia es la predeterminada cuando carga la pagina
const appRoutes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: 'formulario', component: FormularioComponent
    },
    {
        path: 'peliculas', component: PeliculasComponent
    },
    {
        path: 'pagina-de-pruebas', component: PaginaComponent
    }
];

//Exportar el modulo de rutas:

//Para establecer el router vacio para usarlo como servicio
export const appRoutingProviders: any[] = [];
//Cargar la configuracion de rutas
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

