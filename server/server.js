const express = require("express");
const app = express();
const cors = require("cors");
const cookies = require("cookie-parser");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookies());
app.use("/user", require("./routes/user"));
app.use("reviews", require("./routes/reviews"));
const dbo = require("./db/conn");

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
