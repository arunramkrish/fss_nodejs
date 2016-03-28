var express = require('express');

//create express application / middleware
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

//register mapping for each url pattern and http method
app.use("/home", function(req, res, next) {
   console.log("I am common to all"); 
    next();
});

app.get("/", function(req, res, next) {
    console.log("I am in handler 1 " + req.url);
        
        next();
});

app.get("/", function(req, res, next) {
    console.log("I am in handler 2 " + req.url);
    
    //this doesnt do anything as no further handlers
    next(); 
});

app.get("/home", function(req, res) {
    console.log("I am in home page" + req.url);
    res.send("I am in home page");
    res.end();
});

var bankingRouter = require("./banking/banking-router");
var fundRouter = require("./fundtransfer/fund-transfer");

//mounting paths of sub modules
app.use("/banking", bankingRouter);
app.use("/fundtransfer", fundRouter);

app.use(express.static("www"));

//listen for client requests
app.listen(3000);




