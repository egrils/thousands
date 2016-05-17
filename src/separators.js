'use strict';

function thousands_separators(num) {
    var numArray,apartNum,accountNum,text;

    numArray = buildNumArray(num);
    apartNum = buildApartNum(numArray);
    accountNum = buildAccountNum(apartNum);
    text = buildText(accountNum);

    return text;
}

function buildNumArray(num) {
    var numArray;

    numArray = num.toString().split("");

    return numArray;
}

function buildApartNum(numArray) {
    var flag = 0;
    var front = [];
    var behind = [];

    numArray.forEach(function (element) {
        if (element == ".")
            flag = 1;
        if (flag == 0)
            front.push(element);
        else
            behind.push(element);
    });

    return {Front:front,Behind:behind};
}

function buildAccountNum(apartNum) {
    var flag = 0,count = -1,i = 0;
    var accountFront = [];
    var front = apartNum.Front;

    front.forEach(function (element) {
        count --;
        accountFront.push(element);
        if (flag == front.length % 3 || count == 0){
            accountFront.splice(flag+i,0,",");
            count = 3;
            i ++;
        }
        flag ++;
    });

    if (front.length % 3 == 0)
        accountFront.splice(0,1);
    return {Front:accountFront,Behind:apartNum.Behind};
}

function buildText(accountNum) {
    var text = "";

    accountNum.Front.forEach(function (element) {
        text += element;
    });

    accountNum.Behind.forEach(function (element) {
        text += element;
    });
    return text;
}

module.exports = thousands_separators;
