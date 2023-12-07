import express from "express"
import mongoose from "mongoose";

import loggerMiddleware from "./logger/loggerMiddleware.js";
import productsRouter from "./routes/products.router.js"
import errorHandler from "./middlewares/errors/index.js"

const app = express()
const server = app.listen(8080, () => console.log("Listen on 8080"))

app.use(loggerMiddleware);
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect("mongodb+srv://parcepaivaTest:clusterMongo@clustercoderhouse.unxc6mu.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Conectado a la base de datos")
    })
    .catch(error => {
        console.error("Error al conectarse a la base de datos", error);
    })

app.get("/loggerTest", (req, res) => {
    req.logger.fatal("Mensaje de fatal");
    req.logger.error("Mensaje de error");
    req.logger.warning("Mensaje de warn");
    req.logger.info("Mensaje de info");
    req.logger.http("Mensaje de http");
    req.logger.debug("Mensaje de debug");
    res.send("Logs realizados");
});

// en productsRouter hago el mocking de los 100 productos
app.use("/", productsRouter)

// en errorHander hago el customizador de errores
app.use(errorHandler)
