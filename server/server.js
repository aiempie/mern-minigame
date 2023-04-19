require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routers/index");

const connectDB = require("./database/connectDB");
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
routes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
