import DB from "../database/postgres";

async function read()
{
	const people_read = await DB.query("SELECT count(people) as total FROM people")
	return people_read 
}
async function readFilterId(id:number)
{
	const people_readFilter = await DB.query("SELECT * FROM people WHERE id = $1",[id])
	return people_readFilter
}

export const randomRepositorie = 
{
	read,
	readFilterId
}