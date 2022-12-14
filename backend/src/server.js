const express = require("express");
const dbconnect = require("./config/db.connect");
const cors = require("cors");
const projectRoute = require("./features/projects/routes");
//-----------------------------------------------------------
let PORT = 8080;
//------------------------------------------------------------
const app = express();
//------------------------------------------------------------
app.use(express.json());
app.use(cors());
//-------------------------------------------------------------
app.get("/", (req, res) => {
  res.send("LIFE IS AWESOME...");
});

//:::::::::::project Route:::::::::::::::::::

app.use("/project", projectRoute);

//-------------------------------------------------------------

app.listen(PORT, async () => {
  await dbconnect;
  console.log(`Listening on http://localhost:${PORT}`);
});
