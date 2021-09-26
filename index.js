const config = require("config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const address = require("./controllers/address");

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
 if (!config.has("jwtPrivateKey")) {
   console.error("FATAL ERROR: jwtPrivateKey is not defined");
   process.exit(1); 
 }
mongoose
  .connect("mongodb://localhost/upgrad_eshop_backendapp")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.error("Not connected to database"));
app.use(express.json());
app.use("/address", address);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port number ${port}...`));