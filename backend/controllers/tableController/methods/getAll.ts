import { RequestHandler } from "express";
import { TableModel } from "../../../models/table";

export const getAll: RequestHandler = async (req, res, next) => {
    const data = await TableModel.find()

    res.json({ data });
}