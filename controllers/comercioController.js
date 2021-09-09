//referencia al modelo
import comercio from "../models/comercio.js";

const controlador={}

controlador.listado= async (req,res)=>{
    console.log("Ejecutando el FIND")
    const comercios= await comercio.find()
    res.json(comercios)
}

controlador.registrar= async (req,res)=>{
    const nuevocomercio = new comercio(req.body)
    console.log(nuevocomercio)
    await nuevocomercio.save();
    res.send("Se creo nuevo comercio")
}

export default controlador