//OTRA FORMA DE HACERLO PARA MOSTRAR LAS DIMENSIONES CON PLANETAS Y PERSONAS
/*

import { Request, Response } from "npm:express@4.18.2";
import { DimensionModel } from "../../db/dimensiones.ts";
import mongoose from "npm:mongoose@7.6.3";

const ObjectId = mongoose.Types.ObjectId;

export const getDimension = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dimension = await DimensionModel.aggregate([
      {
        $match: {
          _id: new ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "planetas",
          localField: "planetas",
          foreignField: "_id",
          as: "planetas",
        },
      },
      {
        $lookup: {
          from: "personas",
          localField: "planetas.personas",
          foreignField: "_id",
          as: "planetas.personas",
        },
      },
    ]).exec();
    if (!dimension) {
      res.status(404).send("Dimension no encontrada");
      return;
    }
    res.status(200).json(dimension);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
*/
