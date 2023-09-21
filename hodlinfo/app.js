const express = require("express");
const app = express();
const connectDB = require("../hodlinfo/model/db");
const cors = require("cors");
app.use(cors());
const detailsRoute = require("../hodlinfo/routes/detailRoutes");
connectDB();
require("dotenv").config();
const port = process.env.PORT || 4000;

app.use("/details", detailsRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
