import express from "express";
import cors from "cors"
import morgan from "morgan";
import path from "path";

const app = express();
// puertos
    app.set('port', process.env.PORT || 4000);
    app.listen( app.get('port'), ()=>{console.log('se esta ejecutando en el puerto: '+app.get('port'))} );

// middlwares: funciones que se ejecutan antes de las rutas
    app.use(cors()); //se aceptan peticiones
    app.use(express.json()); //se puede tomar objetos json de request
    app.use(morgan('dev')); //proporciona mas informacion respecto a las peticiones
    console.log(path.join(__dirname, '/public'));
    app.use(express.static(path.join(__dirname, '/public')));

// rutas