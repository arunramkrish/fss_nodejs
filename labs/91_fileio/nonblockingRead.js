var fs = require('fs');

fs.readFile("./package.json", function(err, data) {
    if (!err) {
        var packageJson = JSON.parse(data.toString());
        console.log(packageJson.name + ":" +           packageJson.version);
    } else {
        console.log(err);
    }
});
console.log("To check async");