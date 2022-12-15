const {Schema,model} = require("mongoose")

const TimeSchema = new Schema({
    desc:{type:String},
    tag:{type:String},
    start_time:{type:Number},
    end_time:{type:Number},
})

module.exports = model.times || new model("time",TimeSchema)
