import httpStatus from "http-status";
import  {getrandom}  from "../services/randomservice";
import { Request , Response } from "express";


export async function randomcontrol(req: Request, res: Response)
{
	const person = await getrandom()
	res.status(httpStatus.OK).send(person)
}