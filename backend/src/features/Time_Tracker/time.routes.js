const express = require("express");
const timeRoute = express.Router();
const TimeModel = require("./time.model");

// <<<<<<<<<<<<<<< POST >>>>>>>>>>>>>
timeRoute.post("/new", async (req, res) => {
    const { desc, tag, start_time, end_time} = req.body;

    try{
        const time = new TimeModel({ desc, tag, start_time, end_time });
        console.log(time);
      const timedata = await time.save();
       return res.status(201).send({meassage:"data created successfully", timedata,time});
    }
    catch(e){
        console.log(e)
        return res.send(e)
    }

});

// <<<<<<<<<<<<<<< GET >>>>>>>>>>>>>
timeRoute.get("/show", async (req, res) => {
    try {
        const time = await TimeModel.find();
        console.log(time);
       return res.status(200).send({message:"Time data get successfully",time});
    } catch (e) {
        console.log(e);
        return res.send(e)
    }
});

// <<<<<<<<<<<<<<< UPDATE >>>>>>>>>>>>>
timeRoute.put("/update/:id", async (req, res) => {
    const {id} = req.params
    const { desc } = req.body;

    if (desc) {
        try {
            let time = await TimeModel.findByIdAndUpdate({_id:id }, { desc });
            return res.status(200).send({ message: "data update successfully", time });
        } catch (e) {
            console.log(e);
            return res.send(e)
        }
    } else {
      return res.send("Add description for update");
    }
});

// <<<<<<<<<<<<<<< DELETE >>>>>>>>>>>>>
timeRoute.delete("/delete/:id", async(req, res) => {
    const {id}  = req.params

    if(!id){
        return res.send("data not found")
    }
    //else
        try {
            let time = await TimeModel.findByIdAndDelete({_id:id})
            return res.status(200).send("Data deleted successfully")
        } catch (e) {
            console.log(e);
            return res.send(e)
        }
});


module.exports = timeRoute;
