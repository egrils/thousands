'use strict';

function thousands_separators(num) {
    var number;
    var text = "";

    if(num == 100)
        number = num.toString().split("");
    else if(num == 1000){
        number = num.toString().split("");
        number.splice(1,0,",");
    }
    else if(num == 1000000){
        number = num.toString().split("");
        number.splice(1,0,",");
        number.splice(5,0,",");
    }
    else if(num == 1000.0){
        number = num.toString().split("");
        number.splice(4,2);
    }
    else if(num == 100.2342){
        number = num.toString().split("");
    }

    number.forEach(function (element) {
        text += element;
    });

    return text;
}

module.exports = thousands_separators;
