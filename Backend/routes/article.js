'use strict'

var express = require('express')
var ArticleController = require('../controllers/article')

var router = express.Router() //LLAMO AL ROUTER de express que trae dentro

var image_upload_dir = "./upload/articles"
var multiparty = require('multiparty');  //CARGAR modulo MULTIPARTY

var middleware_upload = new multiparty.Form( {uploadDir: image_upload_dir});
//SE EJECUTA ANTES QUE EL METODO DEL CONTROLADOR

//Creo mi rutas de pruebas por post (OCULTA)
//router.post('/nombre', objeto.metodo)
router.post('/datos-curso', ArticleController.datosCurso)
//Creo mi ruta  por get (LA RUTA VISIBLE)
router.get('/test-de-controlador', ArticleController.test)

//Rutas útiles para artículos
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