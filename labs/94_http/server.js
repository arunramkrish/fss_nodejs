var http = require('http');
var util = require("util");
var process = require("process");

var server = http.createServer();

server.on("request", function(request, response) {
    console.log("Request:" + request.url);
    console.log("Http method:" + request.method);
    //console.log("Http Body:" + request.body);
    if (request.method == "POST") {
        request.pipe(process.stdout);
        
    }
    
    response.write("msg from server");
    
    response.end();
});

//bind listener for listening event - called once server starts listening
server.on("listening", function() {
   console.log("Server listening") ;
});

//start listening
server.listen(3000);