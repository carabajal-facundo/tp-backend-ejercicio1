import { Router } from "express";
import { crearTarea, eliminarTarea, obtenerTareas, editarTarea } from "../controllers/tareas.controllers";
import { validacionTarea } from "../helpers/validacionTarea";

const router = Router();

router.route('/tareas')
    .get(obtenerTareas)
    .post(validacionTarea,crearTarea);

router.route('/tareas/:id')
    .delete(eliminarTarea)
    .put(validacionTarea,editarTarea);

export default router;