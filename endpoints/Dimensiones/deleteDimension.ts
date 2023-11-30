import { Request, Response } from "npm:express@4.18.2";
import {DimensionModel} from "../../db/dimensiones.ts";

export const deleteDimension = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dimension = await DimensionModel.findOne({ _id: id }).exec();
    if (!dimension) {
      res.status(404).send("Dimension no encontrada");
      return;
    }
    await DimensionModel.deleteOne({ _id: id }).exec();
    res.status(200).json("Dimension eliminada");
  } catch (error) {
    res.status(500).send("Error al eliminar la dimension");
  }
};