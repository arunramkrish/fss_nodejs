module.exports = (function() {
	var txns = [];
	var transferFundsImpl = function(fromAc, toAc, amount, remarks) {
		txns.push({"fromAccount":fromAc, "toAccount":toAc, 
		"amount":amount, "remarks":remarks});
	}
	var getTransfersImpl = function() {
		return txns;
	};
	return {
		transferFunds : transferFundsImpl,
		getTransfers : getTransfersImpl
		
	};
})();