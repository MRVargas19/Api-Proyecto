import { Router } from "express";
import {
  getAll,
  getOne,
  insertOne,
  updateOne,
  deleteOne,final
} from "../controllers/games.controllers.js";

const router = Router();

// Ruta para obtener todos los juegos
router.get("/", getAll);

// Ruta para obtener un juego por su título (GET)
router.get('/:title', getOne);

// Ruta para agregar un nuevo juego
router.post('/', insertOne);

// Ruta para actualizar un juego por su título
router.post("/:title", updateOne);

// Ruta para eliminar un juego por su título
router.get("/delete/:title", deleteOne);

router.get("/happy/:title" , final);





export default router;
