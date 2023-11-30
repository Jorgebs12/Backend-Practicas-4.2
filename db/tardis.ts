import mongoose from "npm:mongoose@7.6.3";
import { Tardis } from "../types.ts";
import { DimensionModel } from "./dimensiones.ts";

const Schema = mongoose.Schema;

const TardisSchema = new Schema({
  camuflaje: { type: String, requiered: true },
  numRegeneracion: { type: Number, requiered: true },
  año: { type: Number, requiered: true },
  dimensiones: [{ type: Schema.Types.ObjectId, ref: "Dimensiones" }],
});

TardisSchema.path("dimensiones").validate(
  async (dimensiones: mongoose.Types.ObjectId[]) => {
    try {
      const dimension = await DimensionModel.find({
        _id: { $in: dimensiones },
      }).exec();
      if (dimension.length !== dimensiones.length) {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
);

export type TardisModelType = mongoose.Document & Omit<Tardis, "id">;

export const TardisModel = mongoose.model<TardisModelType>(
  "Tardis",
  TardisSchema
);
