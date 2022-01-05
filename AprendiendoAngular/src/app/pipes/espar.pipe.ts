//Pipe que Determina si el numero es par o no
//1
import { Pipe, PipeTransform } from '@angular/core';
//2 decorador que indica el nombre del pipe
@Pipe ({
    name: 'espar'
})
//3 creo la clase para exportarla
export class EsParPipe implements PipeTransform{
    //si o si metodo transform e ingreso
    // el valor de la etiqueta de la vista 
    //que quiero modificar
    transform(value: any) {
        var espar = 'es impar';
        if(value%2==0){
            espar= "es par"
        }
        return "Este año "+espar; 

    }
}
//4 import la clase EsParPipe en el app.module.ts
// y utilizaela en la declarations
