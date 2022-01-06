'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/articles'}); //middleware

// Rutas de prueba
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);

// Rutas útiles (: es ruta obligatorio, ? es ruta opcional)
router.post('/save', ArticleController.save); // POST para ENVIAR al BACKEND o BD
router.get('/articles/:last?', ArticleController.getArticles);// GET para SACAR info de la API, ? SIGNIFICA NO OBLIGATORIO
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update); //PUT para ACTUALIZAR
router.delete('/article/:id', ArticleController.delete);// DELETE para BORRAR
router.post('/upload-image/:id?', md_upload, ArticleController.upload); //utilizo middleware multipart para form-data
router.get('/get-image/:image', ArticleController.getImage);// pido el name de la imagen por url
router.get('/search/:search', ArticleController.search); //BUSCADOR

module.exports = router;