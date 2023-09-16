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
const DB = new Pool({
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: "eduardo",
	database: "random_people", 
	ssl: process.env.NODE_ENV === "production"?true: false
})

export default DB