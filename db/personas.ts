import mongoose from "npm:mongoose@7.6.3";
import { Personas } from "../types.ts";

const Schema = mongoose.Schema;

const PersonaSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export type PersonaModelType = mongoose.Document & Omit<Personas, "id">;
export const PersonaModel = mongoose.model<PersonaModelType>("Personas", PersonaSchema);
