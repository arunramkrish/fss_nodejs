var fundTransferService = require("./app/service/fundTransferService");
fundTransferService.transferFunds("200001", "300001", 10987654);
fundTransferService.transferFunds("400001", "300001", 10987654);
fundTransferService.transferFunds("500001", "300001", 10987654);
fundTransferService.transferFunds("600001", "300001", 10987654);

var http = require("http");
var util = require("util");


var httpServer = http.createServer(function(request, response) {
	console.log("Received request " + util.inspect(request));
	response.end("Response from server");
});


httpServer.listen(3000, "localhost", 511, function(err) {
    if (!err) {
        console.log("Server listening on port 3000");
    } else {
        console.log(err);
    }
});
