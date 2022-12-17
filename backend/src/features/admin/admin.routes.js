const express = require("express");
const User = require("../user/users.model");

const app = express.Router();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.send({ error: true, message: "No user found with this email!" });
  }
  if (user && password == !user.password) {
    return res.send({ error: true, message: "Wrong Password." });
  }
  if (user && user.role !== "admin") {
    return res.send({
      error: true,
      message: "Access Denied! Login with admin credentials.",
    });
  }
  res.send({
    error: false,
    message: "Your are now logged in.",
  });
});

app.get("/users", async (req, res) => {
  try {
    let users = await User.find();
    res.send({ error: false, users });
  } catch (e) {
    res.send({ error: true, message: "Something went wrong." });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.send({ error: false, user, message: "User updated successfully" });
  } catch (e) {
    res.send({ error: true, message: "Something went wrong" });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send({ error: false, message: "User deleted successfully" });
  } catch (e) {
    res.send({ error: true, messsage: "Something went wrong" });
  }
});
