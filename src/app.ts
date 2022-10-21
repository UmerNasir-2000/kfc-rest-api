import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import config from "config";
import connectToDatabase from "./utils/connection";
import categoryRouter from "./routes/categories.route";

(async function main() {
  const app: Application = express();

  app.use("/api/categories", categoryRouter);

  const PORT = config.get<number>("port");
  app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}/`);
    connectToDatabase();
  });
})();
