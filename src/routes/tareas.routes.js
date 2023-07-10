import { Router } from "express";
import { crearTarea, eliminarTarea, obtenerTareas } from "../controllers/tareas.controllers";

const router = Router();

router.route('/tareas').get(obtenerTareas).post(crearTarea);
router.route('/tareas/:id').delete(eliminarTarea);

export default router;