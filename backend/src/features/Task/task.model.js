const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({

projectname:{
type:String,
 ref:'Project',
required:true},

taskname:{
type:String,
ref:'TaskName',
required:true },

date:{
type:String,
required:true,
},
description:{
    type:String,
    required:true,
},
estimatedtime:{
    type:String,
    required:true,
},
assignee:{
    type:String,
    required:true,
},
status:{
    type:Boolean,
    default:false
},
},
{
versionkey:false,
timestamps:true
})
const Task=mongoose.model('task',taskSchema)
module.exports=Task