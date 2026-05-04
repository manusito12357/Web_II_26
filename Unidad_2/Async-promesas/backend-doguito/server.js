import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./conexion.js"
dotenv.config();
const app = express(); // una variable para hacer llamadas a express
app.use(cors());
app.use(express.json());
//GET para listar todo 
app.get("/cliente", async(req,res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM cliente");
        res.json(rows);
    }catch(err){
        res.status(500).json({error: err.message});
    }
})
//GET POR ID    
app.get("/cliente/:Id", async(req,res) => {
    try{
        if(rows.length === 0){
            console.log("Cliente no existe");
            return res.status(404).json ({mensaje: "CLIENTE NO ENCONTRADO"})
        }
        const [rows] = await pool.query("SELECT FROM cliente WHERE Id=?", [req.params.Id]);
    }catch(err){
        //para verificar que si existe el cliente si no existe manda error       
        res.status(500).json({error: err.message});
    }
});
//POST metodo para crear un nuevo cliente
app.post("/cliente", async(req,res) => {
    try{
        const {Id, nombre, email} = req.body;
        await pool.query("INSERT INTO cliente (Id, nombre, email) VALUES (?,?,?)",
        [Id, nombre, email]);
        res.status(201).json({Id, nombre, email})
    }catch(err){
        res.status(500).json({error: err.message});
    }
})
//PUT metodo para actualizar el cliente
app.put("/cliente/:Id", async(req,res) => {
    try{
        const [nombre, email] = req.body;
        await pool.query("UPDATE cliente SET nombre=?, email=? WHERE Id=?",
            [nombre,email,req.params.Id]
        );
        res.json({mensaje:"SE ACTUALIZO CORRECTAMENTE"})
    }catch(err){
        res.status(500).json({error: err.message});
    }
})
//DELETE metodo para eliminar cliente 
app.delete("/cliente/:Id", async(req,res) => {
    try{
        await pool.query("DELETE FROM cliente WHERE Id=?",
            [req.params.Id]
        );
        res.json({mensaje:"SE ELIMINO EXITOSAMENTE EL CLIENTE"})
    }catch(err){
        res.status(500).json({error: err.message});
    }
});
app.listen(process.env.PORT,() => {
    console.log(`SERVER CORRIENDO EN PUERTO ${process.env.PORT}`);
});