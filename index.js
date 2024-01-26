    const express = require("express");

    const app = express();
    const port = process.env.PORT || 9200;
    const {decimalToOctal} = require("./controllers/decimalToOctal");
    require("./database");

    app.use(express.json());

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

    app.get("/decimal-to-octal", (req, res, next) => {
        try
            {
                const {number} = req.query;

                
                res.json({
                    Decimal: number,
                    Octal: decimalToOctal(number)
                });
            }
        catch(e)
            {
                next(e);
            }
    });

    app.listen(port, () => {
        console.log("Your app is working on: \nhttp://localhost:9200");
    });