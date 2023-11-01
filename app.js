import express from "express";
import sequelize from "./src/config/sequelize.js";
import adminRouter from "./src/router/userRouter.js";

const port = 8000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", adminRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
