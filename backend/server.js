const express = require("express");
const app = express();
const openRoute = require("./routes/openIa.routes");
require("dotenv").config({
  quiet: true,
});

const port = process.env.PORT || 5000;
// console.log(port);

app.use(express.json());

app.use("/api", openRoute);

(async () => {
  try {
    app.listen(port, "0.0.0.0", () => {
      console.log(`server set on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("error starting the server", error);
  }
})();
