import pg  from "pg";
import dotenv from "dotenv";
dotenv.config()
const {Pool} = pg;
const DB = new Pool({
	host: "localhost",
	port: 5432,
	user: "postgres",
	password: "eduardo",
	database: "random_people", 
	ssl: process.env.NODE_ENV === "production"?true: false
})

export default DB