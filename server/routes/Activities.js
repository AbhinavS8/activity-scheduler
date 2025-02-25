const express = require('express')
const router = express.Router()
const { Activities } = require("../models");

router.get("/", async (req, res) => {
    const listActivities = await Activities.findAll();
    res.json(listActivities); //can also use .send to get in text? format
})

router.post("/",async (req,res)=>{
    const activity=req.body;
    await Activities.create(activity);
    res.json(activity);
})

module.exports = router