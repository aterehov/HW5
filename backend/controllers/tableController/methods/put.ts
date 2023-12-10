import { RequestHandler } from "express";
import { TableModel } from "../../../models/table";

export const put: RequestHandler = async (req, res, next) => {
    const id = req.params.id;

    console.log({ id });
    console.log(req.body);
    const data = await TableModel.findByIdAndUpdate(id, req.body, {new: true});

    res.json({ data });
}