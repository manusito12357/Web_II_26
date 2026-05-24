import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./conexion.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ================= OS: CLIENTES =================

app.get("/clientes", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM clientes");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/clientes/:Id", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM clientes WHERE Id=?", [req.params.Id]);
        if (rows.length === 0) return res.status(404).json({ mensaje: "CLIENTE NO ENCONTRADO" });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/clientes", async (req, res) => {
    try {
        const { Id, nombre, email } = req.body;
        await pool.query("INSERT INTO clientes (Id, nombre, email) VALUES (?,?,?)", [Id, nombre, email]);
        res.status(201).json({ nombre, email });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/clientes/:Id", async (req, res) => {
    try {
        const { nombre, email } = req.body;
        await pool.query("UPDATE clientes SET nombre=?, email=? WHERE Id=?", [nombre, email, req.params.Id]);
        res.json({ mensaje: "SE ACTUALIZO CORRECTAMENTE" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/clientes/:Id", async (req, res) => {
    try {
        await pool.query("DELETE FROM clientes WHERE Id=?", [req.params.Id]);
        res.json({ mensaje: "SE ELIMINO EXITOSAMENTE EL CLIENTE" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ================= RUTAS: PRODUCTOS =================

app.get("/productos", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM productos");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/productos", async (req, res) => {
    try {
        const { Id, nombre, precio, descripcion } = req.body;
        await pool.query("INSERT INTO productos (Id, nombre, precio, descripcion) VALUES (?,?,?,?)", 
        [Id, nombre, precio, descripcion]);
        res.status(201).json({ mensaje: "PRODUCTO CREADO", nombre });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/productos/:Id", async (req, res) => {
    try {
        const { nombre, precio, descripcion } = req.body;
        await pool.query("UPDATE productos SET nombre=?, precio=?, descripcion=? WHERE Id=?", 
        [nombre, precio, descripcion, req.params.Id]);
        res.json({ mensaje: "PRODUCTO ACTUALIZADO" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/productos/:Id", async (req, res) => {
    try {
        await pool.query("DELETE FROM productos WHERE Id=?", [req.params.Id]);
        res.json({ mensaje: "PRODUCTO ELIMINADO" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ================= RUTAS: MASCOTAS =================

app.get("/mascotas", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM mascotas");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/mascotas", async (req, res) => {
    try {
        const { Id, nombre, edad, raza, peso, id_dueno } = req.body;
        await pool.query("INSERT INTO mascotas (Id, nombre, edad, raza, peso, id_dueno) VALUES (?,?,?,?,?,?)", 
        [Id, nombre, edad, raza, peso, id_dueno]);
        res.status(201).json({ mensaje: "MASCOTA REGISTRADA", nombre });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/mascotas/:Id", async (req, res) => {
    try {
        const { nombre, edad, raza, peso, id_dueno } = req.body;
        await pool.query("UPDATE mascotas SET nombre=?, edad=?, raza=?, peso=?, id_dueno=? WHERE Id=?", 
        [nombre, edad, raza, peso, id_dueno, req.params.Id]);
        res.json({ mensaje: "DATOS DE MASCOTA ACTUALIZADOS" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/mascotas/:Id", async (req, res) => {
    try {
        await pool.query("DELETE FROM mascotas WHERE Id=?", [req.params.Id]);
        res.json({ mensaje: "MASCOTA ELIMINADA" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ================= INICIO DEL SERVIDOR =================

app.listen(process.env.PORT, () => {
    console.log(`SERVER CORRIENDO EN PUERTO ${process.env.PORT}`);
});