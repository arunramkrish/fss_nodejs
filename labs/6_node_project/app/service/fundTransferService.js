var fundTransferDao = require("../dao/daoFactory").fundTransferDao;

module.exports =(function() {
	return {
		transferFunds : function(fromAc, toAc, amount, remarks) {
			console.log("Transferring from " + fromAc + " to " + toAc);
			fundTransferDao.transferFunds(fromAc, toAc, amount, remarks);
			
			var totalTransfers = fundTransferDao.getTransfers();
			console.log(totalTransfers.length);
			
			totalTransfers.forEach(function(transfer, index) {
				console.log(transfer["fromAccount"]);
			});
		}
	};
})();
/*
exports.transferFunds = function(fromAc, toAc, amount, remarks) {
			console.log("Transferring from " + fromAc + " to " + toAc);
};
*/