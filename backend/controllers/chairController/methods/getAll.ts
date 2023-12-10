import { RequestHandler } from "express";
import { ChairModel } from "../../../models/chair";

export const getAll: RequestHandler = async (req, res, next) => {
    const data = await ChairModel.find()

    res.json({ data });
}