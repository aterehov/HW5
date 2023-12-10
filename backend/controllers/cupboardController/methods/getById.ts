import { RequestHandler } from "express";
import { CupboardModel } from "../../../models/cupboard";

export const getById: RequestHandler = async (req, res, next) => {
    const id = req.params.id;

    console.log({ id });
    const data = await CupboardModel.findById(id)

    res.json({ data });
}