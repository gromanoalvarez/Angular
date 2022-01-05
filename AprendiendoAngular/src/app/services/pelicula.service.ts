// Servicios: es una clase que colecciona metodos, (sirve para abstraer logica o separa funcionalidades en los componentes).
// Todo Models tiene un Service. IMPORTARTE, a veces cuando crea servicio falla la compilacion, entonces debe reiniciarse el ng serve
//1ro.
import { Injectable } from "@angular/core";
import { Pelicula } from '../models/pelicula'

//El Injectable permite por medio de este decorador
//evitar declarar "new" services cada vez que los use
@Injectable()

//2do.
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas= [ 
            new Pelicula("Spiderman 4: Verse", 2021, 'https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/08/Nueva-e-irresistible-pista-del-Spider-Verse-de-No-Way-Home-aparece-gracias-al-guionista-de-Spider-Man-into-the-Spiderverse.jpg?fit=1280%2C720&quality=80&ssl=1'),
            new Pelicula("Los vengadores: Endgame", 2018, 'https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F052%2F759%2Fvengadores-endgame-1.jpg&nuevoancho=690&medio=abc'),
            new Pelicula("Batman vs Superman", 2011, 'https://i0.wp.com/elrincon.tv/wp-content/uploads/2016/03/batman_v_superman.jpg?resize=660%2C330&ssl=1')
        ];
    }
    holaMundo(){
        return 'Hola mundo desde un servicio de Angular !!!';
    }
    getPeliculas(){
        // opcion 1: return [ // SE PODRIA HACER ASI "CON ARRAY DE OBJETOS" PERO SE HACE MUY LARGO Y POCO PRACTICO POR ESO CREO "MODELO" (o clase como molde para cada pelicula)
    //   { year: 2021, title: "Spiderman 4: Verse", image: 'https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/08/Nueva-e-irresistible-pista-del-Spider-Verse-de-No-Way-Home-aparece-gracias-al-guionista-de-Spider-Man-into-the-Spiderverse.jpg?fit=1280%2C720&quality=80&ssl=1'},
    //   { year: 2018, title: "Los vengadores Endgame", image: 'https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F052%2F759%2Fvengadores-endgame-1.jpg&nuevoancho=690&medio=abc'},
    //   { year: 2011, title: "Batman vs Superman", image: 'https://i0.wp.com/elrincon.tv/wp-content/uploads/2016/03/batman_v_superman.jpg?resize=660%2C330&ssl=1'},
    //   { year: 2013, title: "Batman vs Superman 2", image: 'https://i0.wp.com/elrincon.tv/wp-content/uploads/2016/03/batman_v_superman.jpg?resize=660%2C330&ssl=1'}
    // ]; la opcion 2 es con una variable que se carga en el constructor
        return this.peliculas;
    }
}
//3ro. ir al peliculas.component.ts: 
// alli importarlo, 
// declararlo como componente providers 
//  dentro de la class declararlo como propiedad en el constructor como "private _nombre"
