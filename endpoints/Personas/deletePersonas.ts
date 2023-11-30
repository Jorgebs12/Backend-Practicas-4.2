import { Request, Response } from "npm:express@4.18.2";
import {PersonModel} from "../../db/personas.ts";

export const deletePersona = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const person = await PersonasModel.findOne({ _id: id }).exec();
    if (!person) {
      res.status(404).send("Persona no encontrada");
      return;
    }
    await PersonasModel.deleteOne({ _id: id }).exec();
    res.status(200).json("Persona eliminada");
  } catch (error) {
    res.status(500).send("Error al eliminar la persona");
  }
};