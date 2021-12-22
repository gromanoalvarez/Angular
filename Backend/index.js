
/**Para comenzar a SINCRONIZAR CON NODEMON ingresar:
 * el siguiente comando en el cmd
 *          npm run devStart
 * 
 *  backend@1.0.0 devStart
> nodemon index.js

[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
 */
console.log("Nodemon activado, ahora se ve en cmd los cambios ni bien guardo aca");

/**Ahora vamos a conectar Node con la base de datos mongo db a través de mongoose */
var mongoose = require("mongoose");
var app = require('./app'); //Módulo, archivo creado manualmente
var port = 3900; //Puerto que yo quiero utilizar


/** CREAR SERVIDOR WEB que nos permite procesar PETICIONES y RESPUESTAS http creado con EXPRESS */
mongoose.connect("mongodb://localhost/testdb", () => {

    console.log("Conectado a la base de datos a través de mongoose");

    app.listen(port, () => {
        console.log('Servidor APP corriendo en http://localhost:'+ port);
    });
 
    /** Si  ahora pongo http://localhost: en el navegador aparece:
     * Cannot GET /
     * Que significa que no hay ruta cargada
    */
});
