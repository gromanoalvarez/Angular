
import { Pipe, PipeTransform } from '@angular/core';
@Pipe ({
    name: 'espar'
})
export class EsParPipe implements PipeTransform{
    transform(value: any) {
        var espar = 'es impar';
        if(value%2==0){
            espar= "es par"
        }
        return "Este año "+espar; 

    }
}