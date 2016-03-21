function Transaction() {
	this.txnId = arguments[0];
	this.txnTime = new Date();
}
function Order() {
	var orderNo = arguments[0];
	this.security = arguments[1];
	this.orderQty = arguments[2];
	this.orderValue = arguments[3];
	this.getOrderNo = function() {
		return orderNo;
	};
	Transaction.call(this, arguments[4]);
}

Transaction.prototype.toString = function() {
	return this.txnId + ":" + this.txnTime;
}

Order.prototype = Object.create(Transaction.prototype);
Order.prototype.init = function(orderNo) {
	this.getOrderNo = function() {
		return orderNo;
	};
}

Order.prototype.getOrderDetails = function() {
	return this.toString() + ": orderNo " + this.getOrderNumber();
}

var order = new Order(1, "INFY", 1000, 100000, 12345);
order.init(123);
order.init(456);


var orderIdGenerator = (function() {
	var counter = 0;
	return {
		getNewOrderId : function() {
			counter++;
			return counter;
		}
	}
})();

Order.prototype.getOrderNumber = (function() {
	var counter = 0;
	return {
		getNewOrderId : function() {
			counter++;
			return counter;
		}
	}
})();

console.log("Order number from proto " + order.getOrderNumber());

console.log (orderIdGenerator.getNewOrderId());
console.log (orderIdGenerator.getNewOrderId());
console.log (orderIdGenerator.getNewOrderId());

