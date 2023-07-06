import {connect} from 'mongoose';
import { MONGODB_URI } from '../config';

connect(MONGODB_URI, {family:4}) //el parametro family es es una opcion para realizar una conexion e indica a que protocolo se de ve de conectar (ipv4)
    .then(resp => console.log(`DB conectada en ${resp.connection.name}`))
    .catch(error => console.log(error));