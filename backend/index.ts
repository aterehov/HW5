import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import tableRouter from "./controllers/tableController";
import chairRouter from "./controllers/chairController";
import cupboardRouter from "./controllers/cupboardController";
import log from "./middleware/log";
import UserModel from "./models/user";
import routes from "./routes/routes";
import secureRoutes from "./routes/secure-routes";
import passport from "passport";

require("./controllers/userController/index");

mongoose.connect("mongodb://127.0.0.1:27017/hw5", {
  // useMongoClient: true,
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
// mongoose.set("useCreateIndex", true);
mongoose.connection.on("error", (error) => console.log(error));
mongoose.Promise = global.Promise;

const app = express();
const port = 51000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", log);
app.use("/", routes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
  secureRoutes
);

app.use("/api/table", tableRouter);
app.use("/api/chair", chairRouter);
app.use("/api/cupboard", cupboardRouter);

// Handle errors.
app.use(function (err: any, req: any, res: any, next: any) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(port, () => {
  console.log("Server started.");
});

// app.get("/", (req, res) => {
//   console.log(req.body);

//   res.json({
//     code: res.statusCode,
//     message: res.statusMessage,
//     headers: res.getHeaders(),
//   });
// });

// app.use("/", log);
// app.use("/api/table", tableRouter);
// app.use("/api/chair", chairRouter);
// app.use("/api/cupboard", cupboardRouter);

// app.listen(port, async () => {
//   await mongoose.connect("mongodb://127.0.0.1:27017");
//   console.log("Server running on port " + port);
// });
