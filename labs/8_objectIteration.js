"use strict";
var obj = { name: "A", prop2 : 123 };
var properties = Object.keys(obj)
obj.name = "Arun";

var id = 1;
Object.defineProperty(obj, "id", {
	configurable: false,
	enumerable: true,
	get : function() {
		return id;
	},
	set : function(newId) {
		console.log("Id changed from " + id + " to " + newId);
		id = "newId:" + newId; 
	}
});
obj.id = 5;
//delete obj.id;
console.log (obj.id);

for (var i in properties) {
	var propName = properties[i];
	console.log(propName + ":" + obj[propName]);
}

function sortFunction() {
	var arrayObject = Array.prototype.slice.call(arguments, 1);
	
	arrayObject.sort();
	
	console.log(arrayObject);
}

sortFunction("Arun", "Ram", "FSS", "Chennai");

















