import { app } from "./app.js";
import { config } from "./config/config.js";


const port = 9222 || config.portApp;

app.listen(port, () => {
    console.log(`App working on http://localhost:${port}
    `)
})