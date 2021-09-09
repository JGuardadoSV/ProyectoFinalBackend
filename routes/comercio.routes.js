import Router from "express"

const ruta = Router();

ruta.get("/listadoComercios",(req,res)=>{
    res.send("Listado de todos los comercios registrados");
})


export default ruta