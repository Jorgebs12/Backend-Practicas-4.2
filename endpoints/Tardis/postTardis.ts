import { Request, Response } from "npm:express@4.18.2";
import { TardisModel } from "../../db/tardis.ts"
import mongoose from "npm:mongoose@7.6.3";

const ObjectId = mongoose.Types.ObjectId;

export const postTardis = async (req: Request, res: Response) => {

  try {

    const { camuflaje, numRegeneracion, año, dimensionesIds } = req.body;  
    const nuevaTardis = await TardisModel.create({ camuflaje, numRegeneracion, año, dimensiones: dimensionesIds.map((dimension) => new ObjectId(dimension)) });
    
    res.status(201).json(nuevaTardis);

  } catch (error) {
    res.status(500).send({endpoint: 'Tardis', error: error.message});
  }
};

/*
{
    "camuflaje": "Militar",
    "numRegeneracion": 80,
    "año": "3802",
    "dimensionesIds": ["6565aa61cf6a4bd20d6eaee2"]
}
*/


