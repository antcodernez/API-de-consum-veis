import mongoose from "mongoose";
import {config} from "./config/config.js";

const conection = config.dbURI;

mongoose.connect(conection)
    .then(db => console.log("Conented to the db boss ñ.ñ"))
    .catch(err => console.error(err))
