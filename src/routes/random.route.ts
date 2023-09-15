import { randomcontrol } from "../controllers/random.controller";
import { Router } from "express";

export const people = Router()
people.get('/person',randomcontrol)

