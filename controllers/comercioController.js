//referencia al modelo
import comercio from "../models/comercio.js";

const controlador={}

controlador.listado= (req,res)=>{
    console.log("Ejecutando el FIND")
    
    const comercios= comercio.find()
}

export default controlador