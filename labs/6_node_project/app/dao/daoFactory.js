var dbconfig = require("../../config/dbconfig.json");
console.log(dbconfig.dbtype);

if (dbconfig.dbtype == "INMEMORY") {
	module.exports.fundTransferDao = require("../dao/fundTransferInmemoryDao");
} else {
	module.exports = {};
}