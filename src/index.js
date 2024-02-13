import app from "./app.js";
import database from './database.js'

app.listen(process.env.PORT,() =>{
    console.log(`http://localhost:9000/api/products ` + process.env.PORT);
})