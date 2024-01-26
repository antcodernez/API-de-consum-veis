const mongoose = require("mongoose");
const {config} = require("./config/config");

const conection = config.dbURI;

mongoose.connect(conection)
    .then(db => console.log("Conented to the db boss ñ.ñ"))
    .catch(err => console.error(err))