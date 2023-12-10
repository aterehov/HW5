import { RequestHandler } from "express";
// import { SampleModel } from "../../../models/sampleModel";
import { TableModel } from "../../../models/table";

export const post: RequestHandler = async (req, res, next) => {
    try {
        console.log({ body: req.body })
        await TableModel.create(req.body);

        res.sendStatus(200);
    } catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
}