//CONTROLADOR:
// son los METODOS(datosCurso, test, save) Y RUTAS RELACIONADAS CON EL BACKEND

'use strict'

var validator = require('validator')
var Article = require('../models/article'); //importar el modelo que cree previamente que media con la base de datos

//creo el OBJETO LITERAL JSON
var controller = { 
    datosCurso: (req, res) => {
       const hola = req.body.hola;
       return res.status(200).send( 
           { //RESPONDE CON
           curso:'Master en Frameworks Js',
           autor:'Victor Robles WEB',
           url:'victorroblesweb.es',
           hola
           }
       )
    },
    test: (req, res) => {
        return res.status(200).send({ //RESPONDE CON
            message: "Soy la acción TEST de mi controlador de artículos"
        })
    },
    save: (req, res) => {
            //Recoger parametros por post (pedir lo que envio en postman por el body- casillas "title y content")
        var params = req.body; 
            //Validar datos con libreria VALIDATOR (instalada previamente) usar TRY y CATCH por si se produzca un error o excepcion en la validacion
        try{
            var validate_tittle = !validator.isEmpty(params.tittle) //boolean TRUE CUANDO NO ESTE VACIO parametro title
            var validate_content = !validator.isEmpty(params.content)
        }catch(err){
            return res.status(200).send({ //RESPONDE CON
            message: 'Faltan datos por enviar'
            })
        }
        if(validate_tittle && validate_content){

            //Crear el objeto a guardar

            //Asignar valores

            //Guardar el articulo

            //Devolver una respuesta
            return res.status(200).send({ //RESPONDE CON
                message: 'Soy la accion SAVE de mi controlador de articulos'
                })
        }else{
            return res.status(200).send({ //RESPONDE CON
                message: 'Los datos no son válidos!!!'
                })
        }
    }
} //end controller

module.exports = controller; //Para poder utilizar este objeto fuera