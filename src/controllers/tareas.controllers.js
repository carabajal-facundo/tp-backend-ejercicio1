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

export const eliminarTarea = async (req,res)=>{
    try {
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'La tarea fue eliminada de forma correcta'});
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: 'Error al eliminar la tarea'});
    }
}

export const editarTarea = async (req,res)=>{
    try {
        await Tarea.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: 'La tarea se logro modificar'});
    } catch (error) {
        console.log(error);
        res.status(400).json({mensaje: 'Error al editar la tarea'});
    }
}