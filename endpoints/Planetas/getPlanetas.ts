import { Request, Response } from "npm:express@4.18.2";
import {PlanetModel} from "../../db/planetas.ts";

export const getPlaneta = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const planet = await PlanetModel.findOne({ _id: id }).exec();
      if (!planet) {
         res.status(404).send("Planeta no encontrada");
         return;
      }
      res.status(200).json(planet);
   } catch (error) {
      res.status(500).send("Error al obtener el planeta");
   }
};
