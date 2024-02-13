//conexion a mongodb usando mongoose
import { mongoose } from "mongoose";


mongoose.connect(process.env.DB_URI)
  .then(db => console.log(`Database Connected`))
  .catch(err => console.error(err));

export default mongoose;