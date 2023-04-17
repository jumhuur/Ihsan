require("dotenv").config();
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

// app

const app = express()

// routes
const UserRoutes = require("./Routes/Users")
const ProjectRouter = require("./Routes/Projects")


// middalwares

app.use((req,res, next) =>  {
    res.header("Access-Control-Allow-Origin", true)
    res.header("Access-Control-Allow-Private-Network", true)
    next()
})

app.use(express.json())

app.use(cors({
    origin:"http://localhost:3001",
    credentials: true
}))


// routing 

app.use('/Api', UserRoutes)
app.use('/Api', ProjectRouter)

// conecting database 

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // server
    app.listen(process.env.PORT, () => {
        console.log('Backend server is Ok')
    })
})
