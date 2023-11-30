import { Request, Response } from "npm:express@4.18.2";
import {DimensionModel} from "../../db/dimensiones.ts";

export const getDimensionesTodas = async (_req: Request, res: Response): Promise<void> => {

    try {
        const dimen = await DimensionModel.find().exec();
        if (!dimen) {
            res.status(404).send("No hay dimensiones");
            return;
        }
        res.status(200).send(
            dimen.map((dimensiones) => ({
                name: dimensiones.name
            }))
        )
    } catch (error) {
        res.status(404).send(error.message);
        return;
    }
};

