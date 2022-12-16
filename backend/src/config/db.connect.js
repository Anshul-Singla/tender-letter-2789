const { default: mongoose } = require("mongoose");

const dbconnect = mongoose.connect("mongodb+srv://ttracker:ttracker@cluster0.crjkp4d.mongodb.net/ttracker")
.then(()=> console.log('connected to DB'))

module.exports = dbconnect