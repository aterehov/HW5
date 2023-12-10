import { RequestHandler } from "express";
import { CupboardModel } from "../../../models/cupboard";

export const put: RequestHandler = async (req, res, next) => {
    const id = req.params.id;

    console.log({ id });
    console.log(req.body);
    const data = await CupboardModel.findByIdAndUpdate(id, req.body, {new: true});

    res.json({ data });
}