const express = require("express");
const User = require("./users.model");
const jwt = require("jsonwebtoken");

const app = express.Router();


app.get('/' , (req , res) => {
    res.send("LIFE IS AWESOME... && welcome to users")
});
app.post("/signup", async (req, res) => {
  const { name, email, password,} = req.body;

  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res.send({ status: false, message: "User already exist!" });
  }
  // --------------------------
  const user = await User.create({
    name,
    email,
    password,
    role: "user",
  });
  return res.send({ status: true, message: "You have signup Successfully" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.send({ Token: "", message: "Wrong Credential!" });
  }

  const Token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    "SECRETKEY",
    { expiresIn: "30 days" }
  );

  // const refreshToken = jwt.sign({}, "REFRESH");
  return res.send({
    Token: Token,
    message: "You have signup Successfully",
  });
});

module.exports = app;
