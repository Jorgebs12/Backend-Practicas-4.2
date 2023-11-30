import { Request, Response } from "npm:express@4.18.2";
import {PersonaModel} from "../../db/personas.ts";
import { PlanetModel } from "../../db/planetas.ts";
import mongoose from "npm:mongoose@7.6.3";

const ObjectId = mongoose.Types.ObjectId;

export const postPlaneta = async (req: Request, res: Response) => {
  try {

    const { name, personas } = req.body;
    const planet = await PlanetModel.create({ name, personas:personas.map(persona => new ObjectId(persona) ) });
    
    res.status(201).json(planet);
  } catch (error) {
    res.status(500).send({endpoint: 'Planeta', error: error.message});
  }
};


/*
{
    "name": "Marte",
    "personas": ["656591df5cba3aa1347bb920", "6565934d7c5dd0e212908930"]
}*/
