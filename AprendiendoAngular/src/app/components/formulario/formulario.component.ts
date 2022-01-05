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
  public campo: string;
  public campo2: string;

  constructor() { 
    this.user={
      nombre:'',
      apellidos:'',
      bio:'',
      genero:''
    };
    this.campo="";
    this.campo2="";
  }

  ngOnInit(): void {
  }
  onSubmit(){
    alert('he vinculado el form con el ts');
    console.log(this.user);
  }
  hasDadoClick(){
    alert('Has dado click')
  }
  hasSalido(){
    alert('Has salido del campo')
  }
  hasPulsadoEnter(){
    alert('Has pulsado la tecla enter en el campo')

  }
}
