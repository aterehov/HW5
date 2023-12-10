import { RequestHandler } from "express";
import { CupboardModel } from "../../../models/cupboard";

export const post: RequestHandler = async (req, res, next) => {
    try {
        console.log({ body: req.body })
        await CupboardModel.create(req.body);

        res.sendStatus(200);
    } catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
}