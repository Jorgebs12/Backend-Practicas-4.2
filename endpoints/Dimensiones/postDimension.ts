import { Request, Response } from "npm:express@4.18.2";
import {DimensionModel} from "../../db/dimensiones.ts";
import {PlanetModel} from "../../db/planetas.ts";
import mongoose from "npm:mongoose@7.6.3";

const ObjectId = mongoose.Types.ObjectId;

export const postDimension = async (req: Request, res: Response) => {
  try {
    const { name, planetasIds } = req.body;

    const dimension = await DimensionModel.create({ name, planetas: planetasIds.map(planeta => new ObjectId(planeta)) });

    res.status(201).json(dimension);
  } catch (error) {
    res.status(500).send({ endpoint: "Dimension", error: error.message});
  }
};

/*
{
    "name": "Dimension C-137",
    "planetasIds": ["6565990a816df7ad63e8dd75"]
}
*/

