const express = require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();

var corsOptions={
    origin: "http://localhost:8080/"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.json({message:"welcome"});
});

const port=process.env.port || 8080;
app.listen(port, ()=>{
    console.log(
        "server is running on port ${port}"
    );
});