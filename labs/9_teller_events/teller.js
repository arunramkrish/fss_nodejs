var util = require("util");
var EventEmitter = require("events");

module.exports = (function() {
    function Teller() {

    }
    util.inherits(Teller, EventEmitter);

    Teller.prototype.submitTxn = function(txnRequest) {
        if (txnRequest.amount) {
            //do the txn
            this.myEmit("success", txnRequest, {response: "successful"});    
        } else {
            this.myEmit("invalid", txnRequest);
        }
    }
    Teller.prototype.myEmit = function(eventName) {
        var listenersArray = this.listeners(eventName);

        var listenerArguments = Array.prototype.slice.call(arguments, 1);
        var emitter = this;

        listenersArray.forEach(function(lis, index) {
           lis.apply(emitter, listenerArguments);
        });

    }
    
    return {
        createTeller : function () {
            new Teller();
        }
    };
})();
