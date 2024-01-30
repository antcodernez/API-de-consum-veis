import dotenv from "dotenv";

dotenv.config({path: ".env"});

const config = {
    portApp: process.env.PORT,
    dbURI : process.env.DB_URI
}

export { config }