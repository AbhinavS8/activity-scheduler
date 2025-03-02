const express = require('express')
const router = express.Router()
const { Activities } = require("../models");

router.get("/", async (req, res) => {
    const listActivities = await Activities.findAll();
    res.json(listActivities); //can also use .send to get in text? format
})

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id
    const post = await Activities.findByPk(id)
    res.json(post)
})

router.post("/",async (req,res)=>{
    const activity=req.body;
    await Activities.create(activity);
    res.json(activity);
})

module.exports = router