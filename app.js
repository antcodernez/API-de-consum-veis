import express from "express";
import morgan from "morgan";
import { productsRouter } from "./routers/products.routes.js";

const app = express();
import "./database.js"; //Solo se hace referencia a este codigo


//Settings: se asignan con set 
app.set("view engine", "ejs");

//Middleares: se asignas con use
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false})); //Poder recibir datos de formularios
app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        "message": "hello world"
    })
})

app.use("/api/products", productsRouter);

export { app }