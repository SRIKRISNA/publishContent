const express = require("express");
const dotenv = require("dotenv");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user-model");
var cors = require("cors");

const app = express.Router();
dotenv.config();

app.use(cors())

// app.post("/regi", async (req, res) => {
//     userModel.find({userName : req.body.userName}).then((userName) =>{
//       if(userName.length){
//         res.send("user already exists")   
//     } else {
//         generatePasswordHash(req.body.password).then((passwordHash) => {
//             userModel.create({
//                 name : req.body.name,
//                 email: req.body.email, password: passwordHash   
//             })
//                 .then(() => {
//                     res.status(200).send(`User added successfully`);
//                 }).catch((err) => {
//                     res.status(400).send(err.message)
//                 })
//         });
//     }
// })
// })

app.post("/signup",(req,res)=>{
    //console.log(req.body);

    UserModel.find({userName:req.body.userName}).then((user)=>{
        console.log(req.body.userName);

        if(user.length){
            res.status(400).json("Username Exit")

        }else{
          let salt = 10;
          bcryptjs.genSalt(salt).then((saltvalue)=>{
              bcryptjs.hash(req.body.password,saltvalue).then((hashpassword)=>{
                  UserModel.create({userName:req.body.userName,password:hashpassword}).then((user)=>{
                   console.log(req.body);
                    res.status(200).json("User Added")
                  }).catch((err)=>{
                    res.status(400).json("Process Issue",err)
                  })
              }).catch((err)=>{
                res.status(400).json("Process Issue",err)
              })
          }).catch((err)=>{
            res.status(400).json("Process Issue",err)
          })
        }
    })
})

app.post("/login",(req,res)=>{
    //comparing password
    UserModel.find({userName: req.body.userName}).then((userData) =>{
        if(userData.length){
            bcryptjs.compare(req.body.password, userData[0].password).then((val)=> {
                if(val){
                    const authToken= jwt.sign(userData[0].userName, process.env.SECRET_KEY);
                    res.status(200).send({authToken});
                }
                else{
                    res.status(400).send("Invalid password")
                }
            })
        }else{
            res.status(400).send("Unauthorized user")
        }
    })
});


app.post("/logout", (req, res) => {
    res.status(200).send("logout works");
});

module.exports = app;