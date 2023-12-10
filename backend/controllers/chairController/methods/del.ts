import { RequestHandler } from "express";
import { ChairModel } from "../../../models/chair";

export const del: RequestHandler = async (req, res, next) => {
    const id = req.params.id;

    console.log({ id });
    const data = await ChairModel.findByIdAndDelete(id);

    res.json({ data });
}