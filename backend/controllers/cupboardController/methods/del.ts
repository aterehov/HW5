import { RequestHandler } from "express";
import { CupboardModel } from "../../../models/cupboard";

export const del: RequestHandler = async (req, res, next) => {
    const id = req.params.id;

    console.log({ id });
    const data = await CupboardModel.findByIdAndDelete(id);

    res.json({ data });
}