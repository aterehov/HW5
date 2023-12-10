import { RequestHandler } from "express";
import { ChairModel } from "../../../models/chair";

export const put: RequestHandler = async (req, res, next) => {
    const id = req.params.id;

    console.log({ id });
    console.log(req.body);
    const data = await ChairModel.findByIdAndUpdate(id, req.body, {new: true});

    res.json({ data });
}