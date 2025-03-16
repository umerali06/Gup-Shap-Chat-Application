import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

import { connectDb } from "./db/connection1.db.js";
connectDb();

app.use(express.json());

const PORT = process.env.PORT || 4000;

// routes
import userRoute from "./routes/user.route.js";
app.use("/api/v1/user", userRoute);

// middlewares
import { errorMiddleware } from "./middlewares/error.middleware.js";
app.use(errorMiddleware);

// server start
app.listen(PORT, () => {
  console.log(`your server is listening at ${PORT}`);
});
