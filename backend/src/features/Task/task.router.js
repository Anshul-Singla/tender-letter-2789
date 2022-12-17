const express=require("express");
const Task=require("./task.model");
const app=express.Router();

app.post("/",async(req,res)=>{
    
const {taskname,
    projectname,
    assignee,
    date,
    description,
    estimatedtime,
    id}=req.body;
try{
 let user=await Task.create({taskname,projectname,assignee,date,description,estimatedtime,id})
       res.send("user data store success fulll")
}catch(e){
    res.send("falid to load")
}
})

//======== Get all task from here ================================
app.get("/",async(req,res)=>{
    try{
const task=await Task.find()
      res.send(task)
    }catch(e){
        res.send("not find")
    }
    
})

//=============== Get task by id ==================================
app.get("/:id",async(req,res)=>{
    
    const{id}=req.params;
    console.log(id)
    try{
const task=await Task.findById({_id:id})
      res.send(task)
    }catch(e){
        res.send("not find")
    }
    
})


// =================== Delete Task ===========================
app.delete("/:id",async(req,res)=>{
    
    const{id}=req.params;
   
    try{
const task=await Task.findByIdAndDelete({_id:id})
    //   res.send(task)
    }catch(e){
        res.send("not find")
    }
    
})

// =================== Edit Task Name=============================
app.patch("/:id",async(req,res)=>{
    const {id}=req.params;
const {taskname}=req.body
if(taskname==""){
    return
}else{


    try{
       await Task.findByIdAndUpdate({_id:id},{$set:{taskname:taskname}})
       return res.status(200).send({ message: "data update successfully" });
    }
    catch(e){
        res.send(e.message)
    }
}
})

//=========================== Button Status ==============================
app.post("/:id",async(req,res)=>{
    const {id}=req.params;
    
const {status}=req.body
console.log(id,status)
try{
    await Task.findByIdAndUpdate({_id:id},{$set:{status:status}})

    return res.status(200).send({ message: "data update successfully" });
 }
 catch(e){
     res.send(e.message)
 }
}
)



module.exports=app;
