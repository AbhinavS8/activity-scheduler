const express = require("express") //import express
const app = express()
const db = require("./models")
const cors = require("cors");

app.use(express.json());
app.use(cors());

//routers
const router = require('./routes/Activities')
app.use('/activities',router)

db.sequelize.sync().then(()=>
    app.listen(3001, () => {  //start the server on the port
    console.log("server running..")
})
)

