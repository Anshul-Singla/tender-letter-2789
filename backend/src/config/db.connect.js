const { default: mongoose } = require("mongoose");

const dbconnect = mongoose.connect("mongodb://127.0.0.1:27017/projects")
.then(()=> console.log('connected to DB'))
module.exports = dbconnect