const { Schema, model } = require("mongoose");

const projectsSchema = new Schema({
  task: {
    type: String,
    require: true,
  },
  taskid: {
    type: String,
    require: true,
    min: 0,
    max: 999,
  },
  desc: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const projectModel = new model("project", projectsSchema);
module.exports = projectModel;
