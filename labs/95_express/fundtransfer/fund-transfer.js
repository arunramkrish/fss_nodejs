var express = require('express');
var router = express.Router();
var fundTransferDao = require("./dao/fundtransferdao");
var util = require('util');

router.get("/", function(req, res) {
    res.send("You are in the home page of fund transfer");
});

router.get("/list", function(req, res) {
    fundTransferDao.getTransfers(function(rows) {
       res.send(util.inspect(rows)); 
    });
});

router.post("/transferFunds", function(req, res) {
    var transferObj = {
        fromAcc: req.body.fromAccount,
        toAcc: req.body.toAccount,
        amount: req.body.amount
    };
    debugger;
    res.send(`Transfer successful from ${transferObj.fromAcc} to ${transferObj.toAcc}`);
    //res.render("transferSuccess", {request: request});
    
});

module.exports = router;