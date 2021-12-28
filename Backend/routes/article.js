'use strict'

var express = require('express')
var ArticleController = require('../controllers/article')

var router = express.Router() //LLAMO AL ROUTER de express que trae dentro

var image_upload_dir = "./upload/articles"
var multiparty = require('multiparty');  //CARGAR módulo MULTIPARTY para SUBIR ARCHIVOS

var middleware_upload = (req, res) => {
    var form = new multiparty.Form({uploadDir: image_upload_dir})

    form.parse(req, (err, fields, files) => {

                //Recoger el fichero de la petición
                var file_name = 'Imagen no subida...'
                if(!files ){
                    return res.status(404).send({
                        status: 'error',
                        message: file_name
                    })
                }
                        //Conseguir Path: creado para que el nombre no se repita en el servidor
        var file_path = files.file0.path
        var file_split = file_path.split('\\') // lo separo en partes, ya que solo la ultima porcion es el name verdadero del archivo
        // *ADVERTENCIA * EN LINUX O MAC
        //var file_split = file_path.file_split('/')

        //Conseguir Nombre del archivo que está en posición 2 del path
        var file_name = file_split[2]

        //Conseguir Extensión del fichero para comprobar si se trata de una IMAGEN
        var extension_split = file_name.split('\.')
        var file_ext = extension_split[1]

        //Comprobar la extensión, solo imágenes, si no es válida borrar el fichero
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
            //borrar el archivo subido
            return res.status(404).send({
                status: 'error',
                message: 'error de la extensión formato no válido como imagen'
            })

        }else{
        //Si todo es válido Buscar el artículo, asignarle el nombre de la imagen y actualizarlo
            return res.status(200).send({
                fichero: files,
                split: file_split,
                file_ext
            })
        }
    })
} 
//SE EJECUTA ANTES QUE EL METODO DEL CONTROLADOR

//Creo mi rutas de pruebas por post (OCULTA)
//router.post('/nombre', objeto.metodo)
router.post('/datos-curso', ArticleController.datosCurso)
//Creo mi ruta  por get (LA RUTA VISIBLE)
router.get('/test-de-controlador', ArticleController.test)

//Rutas útiles para artículos:
//GET para SACAR DATOS
//POST para GUARDAR o ENVIAR a la base de datos
//PUT para ACTUALIZAR
//DELETE BORRA
router.post('/save', ArticleController.save)
router.get('/articles/:last?', ArticleController.getArticles)//:last "?" hace que sea un parametro opcional
router.get('/article/:id', ArticleController.getArticle) //sin el ? la hace una ruta obligatoria
router.put('/article/:id', ArticleController.update) 
router.delete('/article/:id', ArticleController.delete) 
router.post('/upload-image/:id', middleware_upload, ArticleController.upload) // guarda imagenes para un articulo en la base de datos con middleware para automaticamente aceptar los archivos

module.exports = router; //EXPORTAR RUTA PARA USARLO Y LA CARGO EN EL APP.JS