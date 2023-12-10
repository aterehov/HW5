import { Router } from "express";
import { getById } from "./methods/getById";
import { getAll } from "./methods/getAll";
import { post } from "./methods/post";
import { put } from "./methods/put";
import { del } from "./methods/del";
import passport from "passport";

const router = Router();

const tableController = {
  getById: getById,
  getAll: getAll,
  post: post,
  put: put,
  delete: del,
};

router.get("/:id", tableController.getById);
router.get("/", tableController.getAll);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  tableController.post
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  tableController.put
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  tableController.delete
);

export default router;
