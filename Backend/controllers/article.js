//CONTROLADOR:
// son los METODOS(datosCurso, test, save) Y RUTAS RELACIONADAS CON EL BACKEND

'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

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

            if(params.image){
                article.image = params.image;
            }else{
                article.image = null;
            }

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
                    article : articleStored
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
        var query = Article.find({})
        var last = req.params.last //last es un parametro opcional que puedo ingressar por la route article
        console.log(last)
        if(last || last != undefined){
            query.limit(5) //Establece un limite "MUESTRA SOLO 5 ARTICULOS"
        }

        //"MUESTRA TODOS" LOS ARTICLES de la base de datos y SORT -_id lo ORDENA desde el mas nuevo al mas viejo.
        query.sort('-_id').exec((err, articles) => {
            if(err){
                return res.status(500).send({ //RESPONDE CON
                    status: 'error',
                    message: 'Error al devolver los articulos!!!'
                })
            }
            if(!articles){
                return res.status(404).send({ //RESPONDE CON
                    status: 'error',
                    message: 'No hay articulos para mostrar!!!'
                })
            }
            return res.status(200).send({ //RESPONDE CON
                status: 'success',
                articles
            })
        })
    },
    getArticle: (req, res) => { //MUESTRA "UN SOLO" ARTICULO
        //Recoger el id de la url que ingreso en el cliente rest postman
        var articleId = req.params.id

        //Comprobar que haya entrado algun valor
        if( !articleId || articleId == null){
            return res.status(404).send({ //RESPONDE CON
                status: 'error',
                message: 'No se ha pasado un articulo por params'
            })
        }

        //Buscar el artículo dentro de mi base de datos por su Id
        Article.findById(articleId, (err, article) => {
            if(err || !articleId){
                return res.status(404).send({ //RESPONDE CON
                    status: 'error',
                    message: 'No existe un artículo con este id en la base de datos'
                })
            }
            //Si todo esta bien, Devolver en json el article.
            return res.status(200).send({ //RESPONDE CON
                status: 'success',
                article
            })
        })
    },
    update: (req, res) => { //ACTUALIZAR: ACEPTA LOS DATOS ENTRANTES Y MODIFICA EL ARTICULO CON MISMO ID PARA ACTUALIZARLO
        //Recoger el id del articulo por la url(params)
        var articleId = req.params.id
        //recoger los datos que llegan por put del body
        var params = req.body
        //Validar los datos con try y catch para evitar posibles errores
        try{
            var validate_title = !validator.isEmpty(params.title)
            var validate_content = !validator.isEmpty(params.content)
        }catch(err){
            return res.status(200).send({ //RESPONDE CON
                status: 'error',
                message: 'Faltan datos por enviar!!!'
            })
        }

        if(validate_title && validate_content){
        //Hacer la consulta con FindAndUpdate (BUSCA Y ACTUALIZA)
            Article.findByIdAndUpdate({_id: articleId}, params, {new: true}, (err, articleUpdated) => {
                if(err){
                    return res.status(500).send({ //RESPONDE CON
                        status: 'error',
                        message: 'Error al actualizar'
                    }) 
                }
                if(!articleUpdated){
                    return res.status(404).send({ //RESPONDE CON
                        status: 'error',
                        message: 'No existe el artículo'
                    }) 
                }
                return res.status(200).send({ //RESPONDE CON
                    status: 'succes',
                    article: articleUpdated
                }) 
            })
        }else{
            return res.status(200).send({ //RESPONDE CON
                status: 'error',
                message: 'La validación no es correcta'
            })
        }
    },
    delete: (req, res) => {
        //Recoger el id de la url
        var articleId = req.params.id
        //Find and Delete
        Article.findByIdAndDelete({_id: articleId}, (err, articleRemoved) => {
            if(err){
                return res.status(500).send({ //RESPONDE CON
                    status: 'error',
                    message: 'Error al Borrar'
                }) 
            }
            if(!articleRemoved){
                return res.status(404).send({ //RESPONDE CON
                    status: 'error',
                    message: 'No se ha borrado el artículo, posiblemente no exista'
                }) 
            }
            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            })
        })
    },
    upload: (req, res) => {
        // Configurar el modulo connect multiparty router/article.js (hecho)

        // Recoger el fichero de la petición
        var file_name = 'Imagen no subida...';

        if(!req.files){
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }

        // Conseguir nombre y la extensión del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');

        // * ADVERTENCIA * EN LINUX O MAC
        // var file_split = file_path.split('/');

        // Nombre del archivo
        var file_name = file_split[2];

        // Extensión del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        // Comprobar la extension, solo imagenes, si es valida borrar el fichero
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
            
            // borrar el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'La extensión de la imagen no es válida !!!'
                });
            });
        
        }else{
             // Si todo es valido, sacando id de la url
             var articleId = req.params.id;

             if(articleId){
                // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Article.findOneAndUpdate({_id: articleId}, {image: file_name}, {new:true}, (err, articleUpdated) => {

                    if(err || !articleUpdated){
                        return res.status(200).send({
                            status: 'error',
                            message: 'Error al guardar la imagen de articulo !!!'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                });
             }else{
                return res.status(200).send({
                    status: 'success',
                    image: file_name
                });
             }
            
        }   
    }, // end upload file

    getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/articles/'+file;

        fs.exists(path_file, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe !!!'
                });
            }
        });
    },

    search: (req, res) => {
        // Sacar el string a buscar
        var searchString = req.params.search;

        // Find or
        Article.find({ "$or": [
            { "title": { "$regex": searchString, "$options": "i"}},
            { "content": { "$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date', 'descending']])
        .exec((err, articles) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la petición !!!'
                });
            }
            
            if(!articles || articles.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos que coincidan con tu busqueda !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });

        });
    }
} //end controller

module.exports = controller; //Para poder utilizar este objeto fuera