import mongoose from "npm:mongoose@7.6.3";
import { Dimensiones } from "../types.ts";
import { PlanetModel } from "./planetas.ts";

const Schema = mongoose.Schema;

const DimensionSchema = new Schema(
  {
    planetas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Planetas" }],
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

DimensionSchema.path("planetas").validate(
  async (planetas: mongoose.Types.ObjectId[]) => {
    try {
      const planet = await PlanetModel.find({
        _id: { $in: planetas },
      }).exec();
      if (planet.length !== planetas.length) {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
);

export type DimensionModelType = mongoose.Document & Omit<Dimensiones, "id">;
export const DimensionModel = mongoose.model<DimensionModelType>(
  "Dimensiones",
  DimensionSchema
);
