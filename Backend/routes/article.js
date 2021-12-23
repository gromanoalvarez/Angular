'use strict'

var express = require('express')
var ArticleController = require('../controllers/article')

var router = express.Router() //LLAMO AL ROUTER de express que trae dentro

//Creo mi rutas de pruebas por post (OCULTA)
//router.post('/nombre', objeto.metodo)
router.post('/datos-curso', ArticleController.datosCurso)
//Creo mi ruta  por get (LA RUTA VISIBLE)
router.get('/test-de-controlador', ArticleController.test)

//Rutas útiles para artículos
//GET para SACAR DATOS
//POST para GUARDAR o ENVIAR a la base de datos
//PUT para ACTUALIZAR
router.post('/save', ArticleController.save)
router.get('/articles/:last?', ArticleController.getArticles)//:last "?" hace que sea un parametro opcional
router.get('/article/:id', ArticleController.getArticle) //sin el ? la hace una ruta obligatoria
router.put('/article/:id', ArticleController.update) 

module.exports = router; //EXPORTAR RUTA PARA USARLO Y LA CARGO EN EL APP.JS