const express = require('express')
const router = express.Router()
const { Activities } = require("../models");
const { Op, where } = require("sequelize");

router.get("/", async (req, res) => {
    const listActivities = await Activities.findAll();
    res.json(listActivities); //can also use .send to get in text? format
})

router.get("/byId/:id", async (req, res) => {
    const id = req.params.id
    const post = await Activities.findByPk(id)
    res.json(post)
})

router.delete("/:id", async (req,res) => {
    actId = Number(req.params.id);
    const deleted = await Activities.destroy(
        {
            where:{id: actId}
        }
    )
    if (deleted) {
        res.json({ message: `Activity with ID ${actId} deleted successfully` });
    }
})

router.get("/schedule", async(req,res) => {
    const activities = await Activities.findAll({
        where: {
            status:"to do",
            start_time: {
                [Op.like]: "0_:__"
            }
        }
    }
);
res.json(activities);

})

router.post("/",async (req,res)=>{
    const activity=req.body;
    await Activities.create(activity);
    res.json(activity);
})

module.exports = router;