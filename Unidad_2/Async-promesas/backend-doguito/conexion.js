import mysql from "msql2/promise"//funciona como puente
import dotenv from "dotenv"//este nos ayuda para poder usar las variables que creamos en el archivo .env
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
});

pool.getConnection().then((conn)=>{
    console.log("TODO BIEN")
    conn.release();
}).catch((err) => console.error("TODO MAL",err.message));

export default pool;