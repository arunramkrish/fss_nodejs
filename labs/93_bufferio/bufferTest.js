var acc = "A0001";
var buff = new Buffer(50);
buff.write(acc,0,10,"utf-8");

var retAcc = getString(buff,0,50);

console.log(retAcc.length);

console.log(retAcc);

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
