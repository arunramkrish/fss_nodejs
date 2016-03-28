var mysql = require("mysql");
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password:'root',
    database: 'fssbank'
});

connection.connect(function(err) {
    if (!err) {
        console.log("DB connection successful");
    }
});
var fundTransferDao = (function() {
    return {
        createTransfer : function(transferObject) {
            
        },
        getTransfers : function(callback) {
            connection.query("select * from fundtransfer", function(err, rows) {
                callback(rows);
            });
        }
    }
})();
module.exports = fundTransferDao;