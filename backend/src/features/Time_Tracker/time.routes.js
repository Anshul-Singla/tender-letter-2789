const express = require("express");
const timeRoute = express.Router();
const TimeModel = require("./time.model");

// <<<<<<<<<<<<<<< POST >>>>>>>>>>>>>
timeRoute.post("/new", async (req, res) => {
    const { desc, tag, project, start_time, end_time } = req.body;

    try {
        const time = new TimeModel({ desc, tag, project, start_time, end_time });
        console.log(time);
        await time.save();
        return res.status(201).send(time);
    } catch (e) {
        console.log(e);
        return res.send({ meassage: "error", e });
    }
});

// <<<<<<<<<<<<<<< GET >>>>>>>>>>>>>
timeRoute.get("/show", async (req, res) => {
    try {
        const time = await TimeModel.find();
        console.log(time);
        return res.status(200).send(time);
    } catch (e) {
        console.log(e);
        return res.send({ meassage: "error", e });
    }
});

// <<<<<<<<<<<<<<< UPDATE >>>>>>>>>>>>>
timeRoute.post("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { desc, done } = req.body;

    if (desc) {
        try {
            let time = await TimeModel.findByIdAndUpdate({ _id: id }, { desc: desc });
            return res
                .status(200)
                .send({ message: "data update successfully", time });
        } catch (e) {
            console.log(e);
            return res.send({ meassage: "error", e });
        }
    }
    if (done) {
        try {
          const time =  await TimeModel.findByIdAndUpdate({ _id: id }, { done: done });
            return res.status(200).send(time);
        } catch (e) {
            console.log(e);
            return res.send({ meassage: "error", e });
        }
    } else {
        return res.send("Add description for update");
    }
});

// <<<<<<<<<<<<<<< DELETE >>>>>>>>>>>>>
timeRoute.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.send("data not found");
    }
    //else
    try {
        let time = await TimeModel.findByIdAndDelete({ _id: id });
        return res.status(200).send("Data deleted successfully");
    } catch (e) {
        console.log(e);
        return res.send({ meassage: "error", e });
    }
});

// <<<<<<<<<<<<<<< TOOGLE >>>>>>>>>>>>>
timeRoute.post("/toggle", async (req, res) => {
    const { done } = req.body;
    console.log(done);

    if (!done) {
        const time = await TimeModel.find({ done: done });
        res.status(201).send(time);
    } else {
        const time = await TimeModel.find({ done: done });
        res.status(201).send(time);
    }
});

module.exports = timeRoute;
