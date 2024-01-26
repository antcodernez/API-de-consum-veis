const dotenv = require("dotenv");

dotenv.config({path: ".env"});

const config = {
    dbURI : process.env.DB_URI
}

module.exports = { config }