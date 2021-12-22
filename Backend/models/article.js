/** 
 * UN MODELO ES 
 *      UNA CLASE
 *          UN MOLDE para crear diferentes OBJETOS
 * 
 * Con propiedades, estructura, Diferentes métodos 
 * 
 * Poder conectarse a la colección de
 *  "Artículos" de la BASE DE DATOS
 *  es una capa de abstracción intermedia que hace que el modelo
 * haga la mejor consulta y devuelva el dato correcto 
 */

'use strict'

var mongoose = require('mongoose') //Carga el módulo mongoose
var Schema = mongoose.Schema //Utilizar el objeto Schema de este tipo

//Le paso las propiedades del objeto json
// en mongoose se define el "tipo de dato" en este caso String
//contenido del aríiculo
//guarda por defecto la fecha actual dentro del artículo
//guardo la ruta de mi imagen 
var ArticleSchema = Schema( 
    {
        title: String, 
        contents: String, 
        date: {type: Date, default: Date.now}, 
        image: String 
    }
)
//EXPORTARLO COMO MODULO para poder IMPORTARLO EN EL BACKEND 
// y crear objetos nuevos 
//o utilizar simplemente el modelo para 
//CONECTARME A BASE DE DATOS utilizando métodos Find, save  

module.exports = mongoose.model('Article', ArticleSchema)

//el MODELO va a tener el nombre 'Article' y ArticleSchema es el ESQUEMA
//Cada documento que guarde en la base de datos va a ser un 'Article' con ese esquema

//Automaticamente Mongoose cuando guarde un documento "pluraliza" el Article (le agrega la s)
//y lo pone en "minuscula" para guardar los documentos en la collections

// artículos --> guardar los documentos de este tipo y con structura dentro de la collections