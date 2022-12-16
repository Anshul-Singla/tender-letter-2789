const {Schema,model} = require("mongoose")

const TimeSchema = new Schema({
    desc:{type:String},
    tag:{type:String},
    project:{type:String},
    start_time:[{type:Number,default:0}],
    end_time:[{type:Number,default:0}],
    done: { type: Boolean,default: false},
})

module.exports = model.times || model("time",TimeSchema)
