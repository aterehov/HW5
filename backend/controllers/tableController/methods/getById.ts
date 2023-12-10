import { RequestHandler } from "express";
import { TableModel } from "../../../models/table";

export const getById: RequestHandler = async (req, res, next) => {
    const id = req.params.id;

    console.log({ id });
    const data = await TableModel.findById(id)

    res.json({ data });
}