import DB from "../database/postgres";

async function read()
{
	const people = await DB.query("SELECT count(people) as total FROM people")
	return people 
}
async function readFilterId(id:number)
{
	const people = await DB.query("SELECT * FROM people WHERE id = $1",[id])
	return people
}

export const randomRepositorie = 
{
	read,
	readFilterId
}