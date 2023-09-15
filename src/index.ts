import  Express,{json}  from "express";
import cors from "cors";
import "express-async-errors";
import DB from "./database/postgres";
import { people } from "./routes/random.route";
const app = Express();
app.use(json())
app.use(cors())
app.use(people)

const port = process.env.PORT || 5000
app.listen(port,()=>console.log("api is working"))
