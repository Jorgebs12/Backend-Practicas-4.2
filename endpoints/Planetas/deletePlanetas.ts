import { Request, Response } from "npm:express@4.18.2";
import {PlanetModel} from "../../db/planetas.ts";

export const deletePlaneta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const planet = await PlanetaModel.findOne({ _id: id }).exec();
    if (!planet) {
      res.status(404).send("Planeta no encontrada");
      return;
    }
    await PlanetaModel.deleteOne({ _id: id }).exec();
    res.status(200).json("Planeta eliminado");
  } catch (error) {
    res.status(500).send("Error al eliminar el planeta");
  }
};
