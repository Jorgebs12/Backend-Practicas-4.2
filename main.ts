import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { postDimension } from "./endpoints/Dimensiones/postDimension.ts";
import { postTardis } from "./endpoints/Tardis/postTardis.ts";
import { postPersonas } from "./endpoints/Personas/postPersonas.ts";
import { postPlaneta } from "./endpoints/Planetas/postPlanetas.ts";
import { getPlaneta } from "./endpoints/Planetas/getPlanetas.ts";
import { getPersonas } from "./endpoints/Personas/getPersonas.ts";
import { getTardis } from "./endpoints/Tardis/getTardis.ts";
import { getDimension } from "./endpoints/Dimensiones/getDimension.ts";
import { getDimensionesTodas } from "./endpoints/Dimensiones/getTodasDimensiones.ts";
import { deleteDimension } from "./endpoints/Dimensiones/deleteDimension.ts";
import { deletePlaneta } from "./endpoints/Planetas/deletePlanetas.ts";
import { deletePersona } from "./endpoints/Personas/deletePersonas.ts";
import { deleteTardis } from "./endpoints/Tardis/deleteTardis.ts";

const env = await load();
try {
  const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

  if (!MONGO_URL) {
    console.log("No se ha encontrado la variable de entorno MONGO_URL");
    Deno.exit(1);
  }

  await mongoose.connect(MONGO_URL);
  console.log("Conectado a MongoDB");

  const app = express();

  app.use(express.json());

  app
    .get("/api/getDimensiones/:id", getDimension)
    .get("/api/getDimensiones", getDimensionesTodas)
    .get("/api/getPlanetas/:id", getPlaneta)
    .get("/api/getPersonas/:id", getPersonas)
    .get("/api/getTardis/:id", getTardis)

    .post("/api/postDimensiones", postDimension)
    .post("/api/postTardis", postTardis)
    .post("/api/postPersonas", postPersonas)
    .post("/api/postPlanetas", postPlaneta)

    .delete("/api/deleteDimensiones/:id", deleteDimension)
    .delete("/api/deletePlanetas/:id", deletePlaneta)
    .delete("/api/deletePersonas/:id", deletePersona)
    .delete("/api/deleteTardis/:id", deleteTardis);

  app.listen(3000, () => {
    console.log("🚀Server listening on port 3000🚀");
  });
} catch (error) {
  console.log(error);
}
