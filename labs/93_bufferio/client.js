var Transaction = require("./transaction.js");

//serialize
var txn1 = new Transaction("A0001", "B00001", 10005, new Date());

var txn1Buffer = txn1.toBuffer();

var txn2 = Transaction.fromBuffer(txn1Buffer);

var util = require("util");
console.log(util.inspect(txn2));
