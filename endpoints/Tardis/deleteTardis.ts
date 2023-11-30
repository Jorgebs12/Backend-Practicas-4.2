import { Request, Response } from "npm:express@4.18.2";
import {TardisModel} from "../../db/tardis.ts";

export const deleteTardis = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tardis = await TardisModel.findOne({ _id: id }).exec();
    if (!tardis) {
      res.status(404).send("Tardis no encontrada");
      return;
    }
    await TardisModel.deleteOne({ _id: id }).exec();
    res.status(200).json("Tardis eliminado");
  } catch (error) {
    res.status(500).send("Error al eliminar la tardis");
  }
};
