function Transaction(from, to, amount, txnTime) {
    this.from = from;
    this.to = to;
    this.amount = amount;
    this.txnTime = txnTime;
}

Transaction.prototype.toBuffer = function() {
    var fromBuff = new Buffer(50);
    fromBuff.write(this.from);
    
    var toBuff = new Buffer(50);
    toBuff.write(this.to, 0, 50, "utf-8");
    
    var amountBuff = new Buffer(8);
    amountBuff.writeDoubleBE(this.amount);
    
    var txnTimeBuff = new Buffer(30);
    txnTimeBuff.write(this.txnTime.toUTCString());
    
    return Buffer.concat([fromBuff, toBuff, amountBuff, txnTimeBuff]);
}

Transaction.fromBuffer = function(buffer) {
    var from =getString(buffer, 0, 50);
    var to = getString(buffer, 50, 50);
    var amount = buffer.readDoubleBE(100);
    var txnTime = getString("utf-8", 108, 30);
    
    return new Transaction(from, to, amount, txnTime);
    
    function getString(buffer, offset, length) {
        var str = "";
        for(var i=offset;i<length;i++) {
            if (buffer[i] == 0) {
                break;
            }
            str += String.fromCharCode(buffer[i]);
        }
        return str;
    }
}


module.exports = Transaction;
