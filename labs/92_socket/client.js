var net = require("net");
var process = require("process");
var utils = require("util");

var socket = net.connect(3100,"localhost", function() {
   console.log("successfully connected to server"); 
});

socket.on("data", function(dataFromServer) {
    console.log("Received from server " + dataFromServer);
});

socket.write("I am client");

socket.end();