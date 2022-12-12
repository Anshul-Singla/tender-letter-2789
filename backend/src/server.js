const express = require("express");

const cors = require("cors");

// let PORT = process.env.PORT || 8080;
let PORT = 8080;


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>LIFE IS AWESOME...</h1>");
});

app.listen(PORT, () => {
 
  console.log(`Listening on http://localhost:${PORT}`);
});
