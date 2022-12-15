const { default: mongoose } = require("mongoose");

const dbconnect = mongoose.connect("mongodb://localhost:27017/projects")
.then(()=> console.log('connected to DB'))

module.exports = dbconnect