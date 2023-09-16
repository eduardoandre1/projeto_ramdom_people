import pg  from "pg";
import dotenv from "dotenv";
import { ClientConfig} from "pg";
dotenv.config()
const {Pool} = pg;
const config:ClientConfig =
{
	connectionString: process.env.DATABASE_URL,
	ssl: process.env.NODE_ENV === "production"?true: false
}
const DB = new Pool(config)

export default DB