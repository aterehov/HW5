import { RequestHandler } from "express";
import { ChairModel } from "../../../models/chair";

export const post: RequestHandler = async (req, res, next) => {
    try {
        console.log({ body: req.body })
        await ChairModel.create(req.body);

        res.sendStatus(200);
    } catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
}