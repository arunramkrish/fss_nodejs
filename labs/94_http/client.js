var http = require("http");
var util = require("util");
var process = require("process");

var options = {
  port : 3000,
  host: "localhost",
    path:"/myfundTransfer"
};

options.method = "GET";

var request = http.request(options);

request.on("response", function(response) {
    debugger;
    console.log("Received response from server");
    
    response.pipe(process.stdout);
});
request.end();

//-----sending POST
options.method="POST";
var postRequest = http.request(options);
postRequest.on("response", function(response) {
               
});
//postRequest.write()
postRequest.end(JSON.stringify({fromAc :"A0001", toAcc: "B001"}));





