import { randomRepositorie } from "../repositories/random.repositorie";

export async function getrandom()
{
	const result = await randomRepositorie.read()
	const size = result.rows[0].total
	const seleted = Math.floor(Math.random() * size +1);
	const people = await randomRepositorie.readFilterId(seleted);
	return people.rows[0]
}