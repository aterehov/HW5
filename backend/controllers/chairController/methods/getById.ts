import { RequestHandler } from "express";
import { ChairModel } from "../../../models/chair";

export const getById: RequestHandler = async (req, res, next) => {
    const id = req.params.id;

    console.log({ id });
    const data = await ChairModel.findById(id)

    res.json({ data });
}