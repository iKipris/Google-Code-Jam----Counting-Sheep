"use strict";

var N = 1692;
var n = N.toString();
var temp = [];
var counter = 0;
var finalnumber;
var checker = false;
if (N != 0)
{
    while (!arrayEquals(temp, ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']))
    {

        for (var i in n)
        {

            var x = checkif(n[i], temp);
            if (x)
            {
                temp.push(n[i]);
            }

        }
        ++counter;
        finalnumber = N * counter;

        n = finalnumber.toString();
        temp.sort();

    }
    console.log(temp, finalnumber - N);
}
else
{
    console.log('INSOMNIA')
}

function arrayEquals(a, b)
{
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function checkif(str, arr)
{
    for (var element of arr)
    {
        if (element === str)
        {
            return false;
        }
    }
    return true;
}
