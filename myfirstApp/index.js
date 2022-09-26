const express = require('express');
var  multer = require('multer');
const {diskStorage} = require("multer");

const app = express();


var storage = diskStorage({
    //this is get callback function and start point destination
    destination: ((req, file, callBack)=>{
        callBack(null,'./upload');
    }),
    filename:((req,file,callBack)=>{
            callBack(null,file.originalname)
    })
})
var upload = multer({storage:storage}).single('myFile');
app.post("/", (req, res)=>{
    upload(req, res, (error)=>{
        if(error){
            res.send("File Upload Fail");
        }
        else{
            res.send('File Upload Success');
        }
    })
})
app.listen(8000,()=>{
    console.log("Server Run Success");
})