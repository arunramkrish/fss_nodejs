var fs = require("fs");

var packageJson = JSON.parse(fs.readFileSync("./package.json").toString());

console.log(packageJson.name + ":" + packageJson.version);

console.log("To check async");