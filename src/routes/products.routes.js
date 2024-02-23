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
router.get("/games", getAll);

// Ruta para obtener un juego por su título (GET)
router.get('/games/:title', getOne);

// Ruta para agregar un nuevo juego
router.post('/games', insertOne);

// Ruta para actualizar un juego por su título
router.post("/games/:title", updateOne);

// Ruta para eliminar un juego por su título
router.get("/games/delete/:title", deleteOne);

router.get("/games/happy/:title" , final);





export default router;
