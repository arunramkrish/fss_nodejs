var fs = require('fs');

var readStream = fs.createReadStream("./package.json");

var writeStream = fs.createWriteStream("./package2.json");

readStream.on("close", function() {
    console.log("Read stream closed");
});
readStream.on("data", function(data) {
   console.log("Received Data 1");// + data); 
});
writeStream.on("close", function() {
    console.log("Write stream closed");
});

readStream.pipe(writeStream);