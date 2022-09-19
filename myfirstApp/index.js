const express = require('express');

app = express();
app.get("/", (req, res)=>{
    {
        res.send("hellow kamal firs Express program");
    }
})

app.listen(8000, ()=>{
    console.log("sever run success");
})