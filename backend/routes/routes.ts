import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    res.json({
      message: "Signup successful",
      user: req.user,
    });
  }
);

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err: any, user: any, info: any) => {
    try {
      if (err || !user) {
        const error = new Error("An error occured.");
        // console.log("err: ");
        // console.log(err);
        // console.log("user: ");
        // console.log(user);
        // console.log(error);
        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) {
          // console.log(error);
          return next(error);
        }

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, "TOP_SECRET");

        return res.json({ token });
      });
    } catch (error) {
      // console.log(error);
      return next(error);
    }
  })(req, res, next);
});

router.get("/", (req, res) => {
  console.log(req.body);

  res.json({
    code: res.statusCode,
    message: res.statusMessage,
    headers: res.getHeaders(),
  });
});

export default router;
