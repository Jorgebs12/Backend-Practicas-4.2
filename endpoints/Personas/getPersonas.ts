import { Request, Response } from "npm:express@4.18.2";
import {PersonaModel} from "../../db/personas.ts";

export const getPersonas = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const person = await PersonaModel.findOne({ _id: id }).exec();
      if (!person) {
         res.status(404).send("Persona no encontrada");
         return;
      }
      res.status(200).json(person);
   } catch (error) {
      res.status(500).send("Error al obtener la persona");
   }
};

