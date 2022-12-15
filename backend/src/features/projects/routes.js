const express = require("express");
const projectModel = require("./project.model");
const projectRoute = express.Router();

//:::::::::::::::::::::: POST ::::::::::::::::::::::::::::

projectRoute.post("/new", async (req, res) => {
  const { task, taskid, desc } = req.body;
  console.log(task);
  const project = new projectModel({ task, taskid, desc });
  await project.save();
  res.status(201).send(project);
});

//:::::::::::::::::::::: TOGGLE :::::::::::::::::::::::::::::

projectRoute.post("/toggle", async (req, res) => {
  const { done } = req.body;
  console.log(done);
  if (!done) {
    const project = await projectModel.find({done:done});
    res.status(201).send(project);
  }
  else{
    const project = await projectModel.find({done:done});
    res.status(201).send(project);
  }
});

//::::::::::::::::::::::: GET :::::::::::::::::::::::::::::
projectRoute.get("/show", async (req, res) => {
  const project = await projectModel.find();
  res.status(200).send(project);
});

//:::::::::::::::::::::: UPDATE ::::::::::::::::::::::::::::

projectRoute.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { desc, done } = req.body;
  console.log(desc);
  if (desc) {
    await projectModel.findByIdAndUpdate({ _id: id }, { desc: desc });
    return res.status(200).send({ message: "data update successfully" });
  }
  if (done) {
    await projectModel.findByIdAndUpdate({ _id: id }, { done: done });
    return res.status(200).send({ message: "data update successfully" });
  } else {
    res.send("send valid data");
  }
});

//:::::::::::::::::::::: DELETE ::::::::::::::::::::::::::::

projectRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    let project = await projectModel.findByIdAndDelete({ _id: id });
    return res.status(200).send("data deleted successfully");
  } else {
    res.send("send valid data");
  }
});
//-------------------------- EXPORTING ------------------------------
module.exports = projectRoute;
