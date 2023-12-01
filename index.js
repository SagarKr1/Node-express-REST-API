const express = require('express');


const app = express();

app.get("/",(req,res)=>{
    console.log("Get method");
    res.send("Get Method");
})

app.post('/post',(req,res)=>{
    console.log("Post method");
    res.send("Post Method");
})

app.put('/put',(req,res)=>{
    console.log("Put method");
    res.send("Put Method");
})

app.delete('/delete',(req,res)=>{
    console.log("Delete method");
    res.send("Delete Method");
})

app.listen(8000,()=>console.log("http://localhost:8000"));