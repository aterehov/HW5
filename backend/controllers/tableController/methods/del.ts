import { RequestHandler } from "express";
import { TableModel } from "../../../models/table";

export const del: RequestHandler = async (req, res, next) => {
    const id = req.params.id;

    console.log({ id });
    const data = await TableModel.findByIdAndDelete(id);

    res.json({ data });
}