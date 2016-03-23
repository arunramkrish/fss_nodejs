var MyTeller = require("./teller");
var util = require("util");

var myTeller = MyTeller().createTeller();

myTeller.setMaxListeners(5);

function success(req, res) {
    console.log("Success: " + util.inspect(req));
    console.log("response: " + arguments[1].response);
    console.log("response param: " + res.response);
}
myTeller.on("newListener", function(e, l){
    console.log(e + " " + l);
});
var temp="to debug";
debugger;

//register handlers
myTeller.once("success", success);
myTeller.on("invalid", function(req) {
    console.log("Invalid: " + util.inspect(req));
});
myTeller.once("success", success);
myTeller.on("success", function(req) {
    console.log("Invalid: " + util.inspect(req));
});
myTeller.once("success", success);
myTeller.on("success", function() {
    console.log("I got success callback");
});
myTeller.on("success", function(req) {
    console.log("Invalid: " + util.inspect(req));
});

//test teller with sample transactions
myTeller.submitTxn({amount:1000});
myTeller.submitTxn({amount:1000});
myTeller.submitTxn({junk:"want to be invalid"});
myTeller.submitTxn({junk:"want to be invalid"});

myTeller.removeAllListeners("invalid");

myTeller.submitTxn({junk:"want to be invalid"});
