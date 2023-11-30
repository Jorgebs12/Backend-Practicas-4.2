import { Request, Response } from "npm:express@4.18.2";
import {TardisModel} from "../../db/tardis.ts";

export const getTardis = async (req: Request, res: Response) => {
   try {
      const { id } = req.params;
      const tardis = await TardisModel.findOne({ _id: id }).exec();
      if (!tardis) {
         res.status(404).send("Tardis no encontrada");
         return;
      }
      res.status(200).json(tardis);
   } catch (error) {
      res.status(500).send("Error al obtener la tardis");
   }
};
