import  Express  from "express";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
const puerto=3000;

//GET con parametros 
app.get("/",(req,res)=>{
    res.send("hola");
})



app.listen(puerto,()=>console.log("Servidor en línea"));