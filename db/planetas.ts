import mongoose from "npm:mongoose@7.6.3";
import { Planetas } from "../types.ts";
import { PersonaModel } from "./personas.ts";

const Schema = mongoose.Schema;

const PlanetaSchema = new Schema(
  {
    personas: [{ type: Schema.Types.ObjectId, ref: "Personas" }],
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

PlanetaSchema.path("personas").validate(
  async (personas: mongoose.Types.ObjectId[]) => {
    try {
      const person = await PersonModel.find({
        _id: { $in: personas },
      }).exec();
      if (person.length !== personas.length) {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
);

export type PlanetaModelType = mongoose.Document & Omit<Planetas, "id">;
export const PlanetModel = mongoose.model<PlanetaModelType>(
  "Planetas",
  PlanetaSchema
);
