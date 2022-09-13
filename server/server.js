const express = require("express")
const mongoose = require("mongoose")
const userController = require("./Routes/User-route")
const cors = require("cors")
const Express = require("express")

const app = Express();
app.use(Express.json({limit:"30mb",extended:true}))
app.use(cors())

app.listen(process.env.PORT || 5000,()=>{
    console.log("server running at port : 5000")
})
//middleware
app.use(express.json())

const DB = "mongodb+srv://krishna:spkrishna@krishnacluster.xjap0dj.mongodb.net/publishContent"
mongoose.connect(DB).then(()=>{
    console.log("connected to database.....")
})

app.use("/user", userController);


