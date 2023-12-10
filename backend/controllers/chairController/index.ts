import { Router } from "express";
import { getById } from "./methods/getById";
import { getAll } from "./methods/getAll";
import { post } from "./methods/post";
import { put } from "./methods/put";
import { del } from "./methods/del";
import passport from "passport";

const router = Router();

const chairController = {
  getById: getById,
  getAll: getAll,
  post: post,
  put: put,
  delete: del,
};

router.get("/:id", chairController.getById);
router.get("/", chairController.getAll);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  chairController.post
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  chairController.put
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  chairController.delete
);

export default router;
