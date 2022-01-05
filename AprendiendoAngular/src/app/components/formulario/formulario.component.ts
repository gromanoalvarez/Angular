import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
//creo un objeto "user" que incluya un json con todas los "name de los inputs"
//del formulario vacio porque luego le voy a pasar los parametros con una 
//etiqueta bidireccional
  public user:any;

  constructor() { 
    this.user={
      nombre:'',
      apellidos:'',
      bio:'',
      genero:''
    };
  }

  ngOnInit(): void {
  }
  onSubmit(){
    alert('he vinculado el form con el ts');
    console.log(this.user);
  }

}
