var net = require("net");
var utils = require("util");
var process = require("process");

var server = net.createServer();

server.on("listening", function() {
    console.log("Server listening ");
});

server.on("error", function(error) {
    console.log("server got an error " + utils.inspect(error));
});

server.on("connection", function(socket) {
   console.log("A client has connected to server"); 
    var clientId = "";
    
    socket.on("connect", function() {
        clientId = socket.localAddress + ":" + socket.localPort;
        
        console.log("Obtained new client connection: " + socket.localAddress);
    });
    
    socket.on("data", function(dataBuffer) {
        console.log("Received data " + dataBuffer.toString());
        
        process.nextTick(function() {
           socket.write(dataBuffer.toString() + new Date().toDateString()); 
        });
    });
    
    socket.on("error", function(err) {
       console.log("Received error from client " + err); 
    });
    
    socket.on("close", function(err) {
       console.log("client disconnected from server " + clientId); 
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
});

//for handling server close
server.on("close", function() {
   console.log("server closed"); 
});

server.listen(3100);