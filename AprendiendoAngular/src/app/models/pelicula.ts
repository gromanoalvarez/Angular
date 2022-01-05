/**
 * PRACTICA POO
 * Un MODELO es una CLASE que representa a un tipo de OBJETO PELICULA, objetos con mismas propiedades pero de valores diferentes
 * (sera utilizado en peliculas.components.ts)
 */

export class Pelicula {
  //EXPORT da la oportunidad de utilizar la clase fuera de este fichero

  /**Las propiedades pueden tener 3 valores de acceso:
    PUBLIC: se pueden utilizar tanto dentro como fuera de la clase 
    PROTECTED: dentro de la clase y las clases que la hereden
    PRIVATE: solo se pueden utilizar dentro de la clase donde fueron definidas
    */

  //1ra opcion... Lo podria hacer "clasicamente" de este modo,
  /*
    public title: string;
    public year: number;
    public image: string;

    constructor(title, year, image){
        this.title=title;
        this.year=year;
        this.image=image;
    }

*/
  //2da opcion-... Que nos permite TYPESCRIPT

  constructor(public title: string, public year: number, public image: string) {
    this.title = title;
    this.year = year;
    this.image = image;
  }
}
