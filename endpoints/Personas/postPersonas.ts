import { Request, Response } from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";
import { PersonaModel } from "../../db/personas.ts"

const ObjectId = mongoose.Types.ObjectId;

export const postPersonas = async (req: Request, res: Response) => {

  try {

    const { name } = req.body;

    const nuevaPersonas = await PersonaModel.create({ name });
    res.status(201).json(nuevaPersonas);

  } catch (error) {
    res.status(500).send({ endpoint: "Persona", error: error.message});
  }
};