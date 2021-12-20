'use strict'

//1.Cargar modulos(dependencias) de Node para CREAR EL SERVIDOR
var express = require ('express'); //Permite crear el servidor
var bodyParser = require ('body-parser'); //Convierte a json para que js lo entienda como objeto nativo


//2.Ejecutar EXPRESS ( para poder trabajar con el HTTP)
var app = express(); // express va a ser la aplicacion en si

//3.Middlewares (siempre es algo que se ejecuta antes de cargar una ruta o URL)
app.use(bodyParser.urlencoded({extended:false})); //Para utilizar el body parser
app.use(bodyParser.json()); //Convierte cualquier peticion que llegue a  json


//4.Exportar módulo (es el fichero actual)
module.exports = app; //permite usar el objeto "fuera de este fichero" hacia el index.js


//5.Crear Ruta o metodo para probar el API REST
/** si en el navegador pongo http://localhost:3900/probando el cmd muestra Hola mundo SI ENVIO POR GET
 * 
 * También para probar el API puedo usar POSTMAN que es un "CLIENTE REST" me permite
 * manipular todas las PETICIONES (RES REQ) que haga, pego mi URI y luego elijo el tipo de método
 * GET, POST, PUT, DELETE entre otros.
 * 
 * Si quiero enviar por GET entonces debo hacer app.get()
 * GET ES VISIBLE EN EL NAVEGADOR
 * CON POST SE OCULTA LA INFO
  */
 app.get('/probando', (req, res) => {
    //REQ  request recibe (solicitud) y RES response  lo que envio (respuesta) 
   //console.log("Hola mundo");

   const hola = req.body.hola; //Así  REQ requiero del Body la key hola que ingrese previamente por el postman x-www-form-urlencoded

   return res.status(200).send( //Así envio con RES
       {
       estoy:'Aquí',
       curso:'Master en Frameworks Js',
       autor:'Victor Robles WEB',
       url:'victorroblesweb.es',
       hola
       }
   );
     //200 es el código de estado http de exito (OK), como el 404 (ERROR)

       /*Aca puedo devolver al http://localhost:3900/probando 
       lo que quiera por ejemplo un html
       `
       <ul>
           <li>NodeJs</li>
           <li>Angular</li>
           <li>React</li>
           <li>VueJs</li>
       </ul>
       `
       Pero metemos el JSON {}

       */
});




//Cargar ficheros rutas

//CORS (permite peticiones desde el frontend) al final del desarrollo de la APi

//Añadir prefijos a rutas /API


/***
 * 
 * LA ARQUITECTURA VISTA-CONTROLADOR MUBC para backend y frontend
 *      1. MODELO la capa de abstraccion , MODELO DE ARTICLE hace
 *   definir que campos vamos a tener sobre el "objeto"
 *      2. los CONTROLADORES, recibir y devolver datos al cliente
 *      3.PISTAS: los json que nos devuleve cada metodo de la api
 * 
 * separar codigo en rutas
 * 
 * separar en servicios
 * 
 * hacer mas middlewars
 */


