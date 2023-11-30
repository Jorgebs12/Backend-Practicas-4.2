import { Request, Response } from "npm:express@4.18.2";
import { DimensionModel } from "../../db/dimensiones.ts";

export const getDimension = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dimension = await DimensionModel.findOne({ _id: id }).exec();
    if (!dimension) {
      res.status(404).send("Dimension no encontrada");
      return;
    }
    res.status(200).json(dimension);
  } catch (error) {
    res.status(500).send("Error al obtener la dimension");
  }
};
