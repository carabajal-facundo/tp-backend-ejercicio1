import express from "express";

const app = express();
// puertos
    app.set('port', process.env.PORT || 4000);
    app.listen( app.get('port'), ()=>{console.log('se esta ejecutando en el puerto: '+app.get('port'))} );

// middlwares

// rutas