import { Schema, model } from "mongoose";

const tareaSchema = new Schema({
    nomTarea: {
        type: String,
        minLength: 5,
        minLength: 100,
        require: true,
        unique: true
    }
});

const Tarea = model('tarea', tareaSchema);

export default Tarea;