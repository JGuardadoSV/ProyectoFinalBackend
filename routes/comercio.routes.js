import Router from "express"
import cController from "../controllers/comercioController.js"
const ruta = Router();

ruta.get("/listadoComercios",cController.listado)
ruta.post("/registrar",cController.registrar)


export default ruta