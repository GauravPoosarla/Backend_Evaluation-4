const express = require("express");
const cors = require("cors");
const app = express();
const contentRouter = require("./src/routes/contentRoutes");
const { validateJWT } = require("./src/middlewares/authentication");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", contentRouter);

app.listen(8001, () => {
  console.log("Example app listening at http://localhost:8001");
});
