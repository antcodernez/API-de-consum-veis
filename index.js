const express = require("express");

const app = express();
const port = process.env.PORT || 9200;

app.get("/", (req, res, next) => {
    try
        {
            res.send("<h1>Hola baby desde el server</h1>");
        }
    catch(e)
        {
            next(e);
        }
});

app.listen(port, () => {
    console.log("Your app is working on: \n     http://localhost:9200");
});