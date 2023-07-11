import { check } from "express-validator";
import resultadoDeValidacion from "./resultadoValidacion";

export const validacionTarea = [
    check("nomTarea")
        .notEmpty()
        .withMessage("el campo de la tarea es obligatorio")
        .isLength({min: 5, max: 100})
        .withMessage("La tarea debe de contener entre 5 y 100 caracteres"),
    (req,res,next)=>{resultadoDeValidacion(req,res,next)}
    ];