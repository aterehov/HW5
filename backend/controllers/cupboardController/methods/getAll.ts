import { RequestHandler } from "express";
import { CupboardModel } from "../../../models/cupboard";

export const getAll: RequestHandler = async (req, res, next) => {
    const data = await CupboardModel.find()

    res.json({ data });
}