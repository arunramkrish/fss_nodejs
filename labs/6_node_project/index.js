var fundTransferService = require("./app/service/fundTransferService");
fundTransferService.transferFunds("200001", "300001", 10987654);
fundTransferService.transferFunds("400001", "300001", 10987654);
fundTransferService.transferFunds("500001", "300001", 10987654);
fundTransferService.transferFunds("600001", "300001", 10987654);

var http = require("http");
var httpServer = http.createServer();
var util = require("util");

httpServer.listen(3000, "localhost", 511,function(request, response) {
	console.log("Received request " + util.inspect(request));
	//response.send("Response from server");
});
