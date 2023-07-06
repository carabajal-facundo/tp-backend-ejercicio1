import Tarea from '../models/tarea';

export const obtenerTareas = async (req, res)=>{
    try {
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error tareas no encontradas'})
    }
};

export const crearTarea = async (req, res)=>{
    try {
        console.log(req.body);
        const nuevaTarea = new Tarea(req.body);
        await nuevaTarea.save();
        res.status(201).json({mensaeje: 'Se creo la tarea'})
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error al crear la tarea'})
    }
};