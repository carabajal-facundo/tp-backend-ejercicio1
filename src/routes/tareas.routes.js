import { Router } from "express";
import { crearTarea, eliminarTarea, obtenerTareas, editarTarea } from "../controllers/tareas.controllers";

const router = Router();

router.route('/tareas').get(obtenerTareas).post(crearTarea);
router.route('/tareas/:id').delete(eliminarTarea).put(editarTarea);

export default router;