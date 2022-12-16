const express = require("express");
const dbconnect = require("./config/db.connect");
const cors = require("cors");
const projectRoute = require("./features/projects/routes");
const trackerRoute = require("./features/Time_Tracker/time.routes");
const usersRoute = require("./features/user/users.router");
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
app.use("/tracker",trackerRoute)
app.use("/project", projectRoute);
//:::::::::::Users Route:::::::::::::::::::
app.use("/user",usersRoute)


//-------------------------------------------------------------

app.listen(PORT, async () => {
  await dbconnect;
  console.log(`Listening on http://localhost:${PORT}`);
});
