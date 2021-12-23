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
    save: (req, res) => { //GUARDA artículos en la BASE DE DATO
            //Recoger parametros por post (pedir lo que envio en postman por el body- casillas "title y content")
        var params = req.body; 
            //Validar datos con libreria VALIDATOR (instalada previamente) usar TRY y CATCH por si se produzca un error o excepcion en la validacion
        try{
            var validate_title = !validator.isEmpty(params.title) //boolean TRUE CUANDO NO ESTE VACIO parametro title
            var validate_content = !validator.isEmpty(params.content)
        }catch(err){
            return res.status(200).send({ //RESPONDE CON
                status: 'error',
                message: 'Faltan datos por enviar'
            })
        }
        if(validate_title && validate_content){
            //Crear el objeto a guardar
            var article = new Article() //utilizamos el Objeto de Clase Modelo
            //Asignar valores
            article.title = params.title
            article.content = params.content
            article.image = null

            //Guardar el articulo
            article.save((err, articleStored) => {
                if(err || !articleStored){
                    return res.status(404).send({ //RESPONDE CON
                        status: 'error',
                        message: 'El artículo no se ha guardado!!!'
                    })
                }
                                //Devolver una respuesta
                return res.status(200).send({ //RESPONDE CON
                    status: 'success',
                    article
                })
            })

        }else{
            return res.status(200).send({ //RESPONDE CON
                status: 'error',
                message: 'Los datos no son válidos!!!'
            })
        }
    },
    getArticles: (req, res) => {
        return res.status(200).send({ //RESPONDE CON
            status: 'error',
            message: 'Los datos no son válidos!!!'
        })
    }
} //end controller

module.exports = controller; //Para poder utilizar este objeto fuera