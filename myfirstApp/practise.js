const express = require('express');
const bodyParser = require('body-parser');

//create instanceof app express
app = express();
app.use(bodyParser.json());

app.post("/", (req, res)=>{
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    res.send(firstName+ " "+ lastName);
})
app.post("/postMethod", (req, res)=>{
    // const firstName = req.query.firstName;
    // const lastName = req.query.lastName;
    let userName = req.header('userName');
    let password = req.header('password');
    res.send(userName+ " "+ password);
})
app.post("/jsonData", (req, res)=>{

   let myReq = req.body;
   let userName = myReq['name'];
   let city = myReq['city'];


   res.send(userName+ " "+city);

})
app.listen(8000,()=>{
    console.log("Server Data Send Success");
})