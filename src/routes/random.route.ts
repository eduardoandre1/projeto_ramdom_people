import { randomcontrol } from "../controllers/random.controller";
import { Router } from "express";

const people = Router()
people.get('/person',randomcontrol)
export default people;
