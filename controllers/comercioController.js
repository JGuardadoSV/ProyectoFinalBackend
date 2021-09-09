//referencia al modelo
import comercio from "../models/comercio.js";

const controlador={}

controlador.listado= (req,res)=>{

    res.send("Listado de todos los comercios registrados desde controller");
}

export default controlador