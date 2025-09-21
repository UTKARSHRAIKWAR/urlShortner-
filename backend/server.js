import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/routes.js";
import connectDB from "./utils/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import shortUrlRoute from "./routes/routes.js";
import getUrl from "./routes/routes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("working");
});

app.use("/api/auth", userRouter);
app.use("/api", shortUrlRoute);
app.use("/api", getUrl);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
